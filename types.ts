export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum Bar {
  Foo = 'FOO',
  Bar = 'BAR',
  Baz = 'BAZ'
}

export type Foo = {
  __typename?: 'Foo',
  readonly bar: Bar,
};

export type Query = {
  __typename?: 'Query',
  readonly foo: Foo,
};
