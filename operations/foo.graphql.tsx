import * as Types from '../types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetFooQueryVariables = {};


export type GetFooQuery = { readonly __typename?: 'Query', readonly foo: { readonly __typename?: 'Foo', readonly bar: Bar } };

export const GetFooDocument = gql`
    query GetFoo {
  foo {
    bar
  }
}
    `;
export type GetFooComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFooQuery, GetFooQueryVariables>, 'query'>;

    export const GetFooComponent = (props: GetFooComponentProps) => (
      <ApolloReactComponents.Query<GetFooQuery, GetFooQueryVariables> query={GetFooDocument} {...props} />
    );
    

    export function useGetFooQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFooQuery, GetFooQueryVariables>) {
      return ApolloReactHooks.useQuery<GetFooQuery, GetFooQueryVariables>(GetFooDocument, baseOptions);
    };
      export function useGetFooLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFooQuery, GetFooQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetFooQuery, GetFooQueryVariables>(GetFooDocument, baseOptions);
      };
      
export type GetFooQueryHookResult = ReturnType<typeof useGetFooQuery>;
export type GetFooQueryResult = ApolloReactCommon.QueryResult<GetFooQuery, GetFooQueryVariables>;