interface ConstSize {
  width: string;
  maxWidth: string;
  minWidth: string;
  height: string;
  maxHeight: string;
  minHeight: string;
  flexShrink: number;
}

export const constSize = (
  width: string,
  height: string = width
): ConstSize => ({
  width: width,
  maxWidth: width,
  minWidth: width,
  height: height,
  maxHeight: height,
  minHeight: height,
  flexShrink: 0,
});
