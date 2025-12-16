"use client";

import { useEffect, useRef } from "react";
import { ChordBox } from "vexchords";

interface GuitarTabProps {
  positions: Array<{ str: number; fret: number }>;
  chordName?: string;
  fingers?: number[]; // Finger numbers for each string (1=index, 2=middle, 3=ring, 4=pinky, 0=open)
}

export default function GuitarTab({ positions, chordName, fingers }: GuitarTabProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chordBoxRef = useRef<ChordBox | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = "";

    // Sort positions by string number (6 to 1, lowest to highest) for VexChords
    const sortedPositions = [...positions].sort((a, b) => b.str - a.str);
    
    // Convert positions from { str, fret } to VexChords format
    // VexChords uses [string, fret] tuples where string is 1-6 (1 = high E, 6 = low E)
    const chord: Array<[number, number]> = sortedPositions.map((pos) => [pos.str, pos.fret] as [number, number]);

    // Determine the position (starting fret) - use the lowest non-zero fret
    const frets = positions.map((p) => p.fret).filter((f) => f > 0);
    const position = frets.length > 0 ? Math.min(...frets) : 1;

    // Create finger numbers array if provided
    // VexChords expects fingers array ordered from string 6 to string 1 (low to high)
    // Map fingers to match the sorted chord order
    let fingerNumbers: number[] | undefined;
    if (fingers && fingers.length === positions.length) {
      // Create a map of position to finger number
      const fingerMap = new Map<string, number>();
      positions.forEach((pos, index) => {
        const key = `${pos.str}-${pos.fret}`;
        fingerMap.set(key, fingers[index]);
      });
      
      // Map fingers to sorted positions (6 to 1)
      fingerNumbers = sortedPositions.map((pos) => {
        const key = `${pos.str}-${pos.fret}`;
        return fingerMap.get(key) ?? 0;
      });
    }

    // Create chord structure for VexChords
    const chordData = {
      chord: chord,
      position: position,
      ...(fingerNumbers && { fingers: fingerNumbers }),
    };

    // Create and configure ChordBox
    const chordBox = new ChordBox(containerRef.current, {
      width: 150,
      height: 180,
      showTuning: true,
      defaultColor: "#000",
      backgroundColor: "transparent",
    });

    // Draw the chord
    chordBox.draw(chordData);

    chordBoxRef.current = chordBox;

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [positions, fingers]);

  return (
    <div className="flex justify-center">
      <div ref={containerRef} className="min-w-[150px]" />
    </div>
  );
}
