"use client";

import { useEffect, useRef } from "react";
import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";

interface MusicNotationProps {
  notes: string[];
  clef?: "treble" | "bass";
}

export default function MusicNotation({ notes, clef = "treble" }: MusicNotationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = "";

    // Create a renderer
    const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
    renderer.resize(600, 200);
    const context = renderer.getContext();

    // Create a stave
    const stave = new Stave(10, 40, 550);
    if (clef === "treble") {
      stave.addClef("treble");
    } else {
      stave.addClef("bass");
    }
    stave.addTimeSignature("4/4");
    stave.setContext(context).draw();

    // Convert note names to VexFlow format
    // VexFlow uses format like "c/4" (lowercase) where c is the note and 4 is the octave
    // For C-Major scale: C4, D4, E4, F4, G4, A4, B4, C5
    const vexNotes = notes.map((note, index) => {
      const noteLower = note.toLowerCase();
      // First 7 notes are in octave 4, last C is in octave 5
      const octave = index === notes.length - 1 ? 5 : 4;
      return `${noteLower}/${octave}`;
    });

    // Create notes
    const staveNotes = vexNotes.map((note) => {
      return new StaveNote({
        clef: clef,
        keys: [note],
        duration: "q", // quarter note
      });
    });

    // Create a voice and add notes
    // Use soft mode to allow flexible note durations
    // For 8 quarter notes, we need 8 beats total
    const voice = new Voice({ numBeats: 8, beatValue: 4 });
    // Set to soft mode (1 = SOFT, 0 = STRICT)
    // This allows the voice to accept notes that span multiple measures
    if (typeof voice.setMode === "function") {
      voice.setMode(1);
    }
    voice.addTickables(staveNotes);

    // Format and render
    const formatter = new Formatter();
    formatter.joinVoices([voice]);
    formatter.format([voice], 500);

    voice.draw(context, stave);

    rendererRef.current = renderer;

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [notes, clef]);

  return (
    <div className="my-6 flex justify-center overflow-x-auto">
      <div ref={containerRef} className="min-w-[600px]" />
    </div>
  );
}

