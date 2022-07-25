type RemoveArray<ArrayLike> = ArrayLike extends any[] ? ArrayLike[number] : ArrayLike;

type PathImpl<Obj, Key extends keyof Obj> = Key extends string
  ? Obj[Key] extends Record<keyof any, any>
    ?
        | `${Key}.${keyof RemoveArray<Obj[Key]> & (number | string)}`
        | `${Key}.${PathImpl<Obj[Key], keyof Obj[Key] & keyof RemoveArray<Obj[Key]>> & (number | string)}`
    : never
  : never;

export type Path<Obj> = PathImpl<Obj, keyof Obj> | keyof Obj;
