"use client";

import React, { useEffect, useRef, useState } from "react";

interface IsolatedProductImageProps {
    src: string;
    alt: string;
    className?: string;
    threshold?: number; // 0-255, how "isolated" a pixel must be to be removed
    bgType?: 'black' | 'white';
}

export default function IsolatedProductImage({ src, alt, className, threshold = 40, bgType = 'black' }: IsolatedProductImageProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            if (!ctx) return;

            const width = img.naturalWidth;
            const height = img.naturalHeight;
            canvas.width = width;
            canvas.height = height;
            setDimensions({ width, height });

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            if (bgType === 'black') {
                // Implementation of a simple flood-fill inspired approach to find the background
                // We'll mark pixels as "background" if they are near-black and connected to the edges
                const isVisited = new Uint8Array(width * height);
                const stack = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]];

                const isBlack = (idx: number) => {
                    return data[idx] < threshold && data[idx + 1] < threshold && data[idx + 2] < threshold;
                };

                while (stack.length > 0) {
                    const [x, y] = stack.pop()!;
                    const idx = y * width + x;
                    const dataIdx = idx * 4;

                    if (x < 0 || x >= width || y < 0 || y >= height || isVisited[idx] || !isBlack(dataIdx)) {
                        continue;
                    }

                    isVisited[idx] = 1;
                    data[dataIdx + 3] = 0; // Make transparent

                    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
                }

                // Smooth edges post-flood fill
                for (let i = 0; i < data.length; i += 4) {
                    if (data[i + 3] === 0) continue; // Already background

                    // If a pixel is very dark but wasn't visited (internal black), keep it.
                    // But if it's strictly on the border of a visited pixel, give it some softness.
                    const y = Math.floor((i / 4) / width);
                    const x = (i / 4) % width;

                    let hasBgNeighbor = false;
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            const nx = x + dx;
                            const ny = y + dy;
                            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                                if (isVisited[ny * width + nx]) hasBgNeighbor = true;
                            }
                        }
                    }

                    if (hasBgNeighbor) {
                        const intensity = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        if (intensity < threshold * 2) {
                            data[i + 3] = Math.max(0, Math.min(255, (intensity / (threshold * 2)) * 255));
                        }
                    }
                }
                ctx.putImageData(imageData, 0, 0);
            }

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            setIsLoaded(true);
        };
    }, [src, threshold, bgType]);

    return (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    aspectRatio: dimensions.width ? `${dimensions.width} / ${dimensions.height}` : 'auto',
                    imageRendering: 'auto',
                    mixBlendMode: bgType === 'white' ? 'multiply' : 'normal'
                }}
                className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                aria-label={alt}
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-lava-orange/20 border-t-lava-orange rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
