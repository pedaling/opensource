type RemoveArray<ArrayLike> = ArrayLike extends any[] ? ArrayLike[number] : ArrayLike;

type PathImpl<Obj, Key extends keyof Obj> = Key extends string
  ? Obj[Key] extends Record<keyof any, any>
    ?
        | `${Key}.${PathImpl<Obj[Key], keyof RemoveArray<Obj[Key]> & keyof Obj[Key]> & (string | number)}`
        | `${Key}.${keyof RemoveArray<Obj[Key]> & (string | number)}`
    : never
  : never;

export type Path<Obj> = PathImpl<Obj, keyof Obj> | keyof Obj;
