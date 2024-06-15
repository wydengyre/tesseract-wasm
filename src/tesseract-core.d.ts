// The file below was generated with emcc --emit-tsd
// and edited by hand where noted
// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    let HEAPF32: any;
    let HEAPF64: any;
    let HEAP_DATA_VIEW: any;
    let HEAP8: any;
    let HEAPU8: any;
    let HEAP16: any;
    let HEAPU16: any;
    let HEAP32: any;
    let HEAPU32: any;
    let HEAP64: any;
    let HEAPU64: any;
}
interface WasmModule {
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
export interface Image {
  data(): any;
  delete(): void;
}

export interface OCREngine {
  getBoundingBoxes(_0: TextUnit): vector<TextRect>;
  clearImage(): void;
  getOrientation(): Orientation;
  getVariable(_0: EmbindString): GetVariableResult;
  loadImage(_0: Image): OCRResult;
  loadModel(_0: EmbindString): OCRResult;
  setVariable(_0: EmbindString, _1: EmbindString): OCRResult;
  getHOCR(_0: any): string;
  getText(_0: any): string;
  getTextBoxes(_0: TextUnit, _1: any): vector<TextRect>;
  delete(): void;
}

export interface TextUnitValue<T extends number> {
  value: T;
}
export type TextUnit = TextUnitValue<1>|TextUnitValue<0>;

export interface vector<IntRect> {
  push_back(_0: IntRect): void;
  resize(_0: number, _1: IntRect): void;
  size(): number;
  get(_0: number): IntRect | undefined;
  set(_0: number, _1: IntRect): boolean;
  delete(): void;
}

export interface vector<TextRect> {
  size(): number;
  get(_0: number): TextRect | undefined;
  push_back(_0: TextRect): void;
  resize(_0: number, _1: TextRect): void;
  set(_0: number, _1: TextRect): boolean;
  delete(): void;
}

export type IntRect = {
  left: number,
  top: number,
  right: number,
  bottom: number
};

export type Orientation = {
  rotation: number,
  confidence: number
};

export type TextRect = {
  rect: IntRect,
  flags: number,
  confidence: number,
  text: EmbindString
};

export type GetVariableResult = {
  success: boolean,
  value: EmbindString
};

export type OCRResult = {
  error: EmbindString
};

interface EmbindModule {
  Image: {new(_0: number, _1: number): Image};
  OCREngine: {new(): OCREngine};
  TextUnit: {Line: TextUnitValue<1>, Word: TextUnitValue<0>};
  // the following two invalid lines are commented out by hand:
  // they seem to be a result of a bug in the emscripten bindings
  // vector<IntRect>: {new(): vector<IntRect>};
  // vector<TextRect>: {new(): vector<TextRect>};
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
