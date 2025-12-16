declare module 'vexchords' {
  export interface ChordBoxOptions {
    width?: number;
    height?: number;
    numStrings?: number;
    numFrets?: number;
    showTuning?: boolean;
    defaultColor?: string;
    backgroundColor?: string;
    bgColor?: string;
    strokeColor?: string;
    textColor?: string;
    stringColor?: string;
    fretColor?: string;
    labelColor?: string;
    fretWidth?: number;
    stringWidth?: number;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: string;
    fontStyle?: string;
    labelWeight?: string;
  }

  export interface ChordData {
    chord: Array<[number, number]>; // [string, fret]
    position: number;
    fingers?: number[]; // Finger numbers for each string (1=index, 2=middle, 3=ring, 4=pinky, 0=open)
    barres?: Array<{ fromString: number; toString: number; fret: number }>;
    tuning?: string[];
  }

  export class ChordBox {
    constructor(element: HTMLElement, options?: ChordBoxOptions);
    draw(chord: ChordData): void;
    clear(): void;
  }
}

