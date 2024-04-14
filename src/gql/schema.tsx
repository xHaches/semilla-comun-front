import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
}

export interface Contribucion {
  __typename?: 'Contribucion';
  contribucion_id: Scalars['ID']['output'];
  fecha_registro: Scalars['DateTime']['output'];
  monto: Scalars['Float']['output'];
  proyecto_id: Scalars['ID']['output'];
  usuario_id: Scalars['ID']['output'];
}

export interface CreateContribucionInput {
  monto: Scalars['Float']['input'];
  proyecto_id: Scalars['ID']['input'];
  usuario_id: Scalars['ID']['input'];
}

export interface CreateLocalidadInput {
  estado: Scalars['String']['input'];
  nombre: Scalars['String']['input'];
  pais: Scalars['String']['input'];
}

export interface CreateProyectoInput {
  descripcion: Scalars['String']['input'];
  fecha_limite_implementacion: Scalars['DateTime']['input'];
  fecha_limite_recaudacion: Scalars['DateTime']['input'];
  localidad_id: Scalars['ID']['input'];
  meta_recaudacion: Scalars['Float']['input'];
  nombre: Scalars['String']['input'];
  usuario_administrador_id: Scalars['ID']['input'];
}

export enum EstadosProyecto {
  Cancelado = 'cancelado',
  EnProgreso = 'en_progreso',
  Finalizado = 'finalizado',
  Suspendido = 'suspendido'
}

export interface FindAllContribucionesInput {
  contribucion_id?: InputMaybe<Array<Scalars['ID']['input']>>;
  proyecto_id?: InputMaybe<Scalars['ID']['input']>;
  usuario_id?: InputMaybe<Scalars['ID']['input']>;
}

export interface FindAllInput {
  apellido_materno?: InputMaybe<Scalars['String']['input']>;
  apellido_paterno?: InputMaybe<Scalars['String']['input']>;
  calle?: InputMaybe<Scalars['String']['input']>;
  colonia?: InputMaybe<Scalars['String']['input']>;
  correo?: InputMaybe<Scalars['String']['input']>;
  cp?: InputMaybe<Scalars['String']['input']>;
  eliminado?: InputMaybe<Scalars['Boolean']['input']>;
  municipio?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  numero_exterior?: InputMaybe<Scalars['String']['input']>;
  numero_interior?: InputMaybe<Scalars['String']['input']>;
  telefono?: InputMaybe<Scalars['String']['input']>;
  usuario?: InputMaybe<Scalars['String']['input']>;
  usuario_id?: InputMaybe<Scalars['ID']['input']>;
}

export interface FindAllLocalidadesInput {
  estado?: InputMaybe<Scalars['String']['input']>;
  localidad_id?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  pais?: InputMaybe<Scalars['String']['input']>;
}

export interface FindAllProyectosInput {
  comunidad_id?: InputMaybe<Scalars['ID']['input']>;
  estado?: InputMaybe<EstadosProyecto>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  proyecto_id?: InputMaybe<Array<Scalars['ID']['input']>>;
  usuario_administrador_id?: InputMaybe<Array<Scalars['ID']['input']>>;
}

export interface Localidad {
  __typename?: 'Localidad';
  estado: Scalars['String']['output'];
  fecha_registro: Scalars['DateTime']['output'];
  localidad_id: Scalars['ID']['output'];
  nombre: Scalars['String']['output'];
  pais: Scalars['String']['output'];
}

export interface Mutation {
  __typename?: 'Mutation';
  crear_contribucion: Contribucion;
  crear_localidad: Localidad;
  crear_proyecto: Proyecto;
}


export interface MutationCrear_ContribucionArgs {
  CreateContribucionInput: CreateContribucionInput;
}


export interface MutationCrear_LocalidadArgs {
  CreateLocalidadInput: CreateLocalidadInput;
}


export interface MutationCrear_ProyectoArgs {
  CreateProyectoInput: CreateProyectoInput;
}

export interface Proyecto {
  __typename?: 'Proyecto';
  descripcion: Scalars['String']['output'];
  estado: EstadosProyecto;
  fecha_limite_implementacion: Scalars['DateTime']['output'];
  fecha_limite_recaudacion: Scalars['DateTime']['output'];
  fecha_registro: Scalars['DateTime']['output'];
  localidad_id: Scalars['ID']['output'];
  meta_recaudacion: Scalars['Float']['output'];
  nombre: Scalars['String']['output'];
  proyecto_id: Scalars['ID']['output'];
  saldo: Scalars['Float']['output'];
  usuario_administrador_id: Scalars['ID']['output'];
}

export interface Query {
  __typename?: 'Query';
  contribucion: Contribucion;
  contribuciones: Array<Contribucion>;
  localidad: Localidad;
  localidades: Array<Localidad>;
  proyecto: Proyecto;
  proyectos: Array<Proyecto>;
  usuario: Usuario;
  usuarios: Array<Usuario>;
}


export interface QueryContribucionArgs {
  contribucion_id: Scalars['ID']['input'];
}


export interface QueryContribucionesArgs {
  FindAllContribucionesInput?: InputMaybe<FindAllContribucionesInput>;
}


export interface QueryLocalidadArgs {
  localidad_id: Scalars['ID']['input'];
}


export interface QueryLocalidadesArgs {
  FindAllLocalidadesInput?: InputMaybe<FindAllLocalidadesInput>;
}


export interface QueryProyectoArgs {
  proyecto_id: Scalars['ID']['input'];
}


export interface QueryProyectosArgs {
  FindAllProyectosInput?: InputMaybe<FindAllProyectosInput>;
}


export interface QueryUsuarioArgs {
  usuario_id: Scalars['ID']['input'];
}


export interface QueryUsuariosArgs {
  FindAllInput?: InputMaybe<FindAllInput>;
}

export interface Usuario {
  __typename?: 'Usuario';
  apellido_materno: Scalars['String']['output'];
  apellido_paterno: Scalars['String']['output'];
  calle: Scalars['String']['output'];
  colonia: Scalars['String']['output'];
  cp: Scalars['String']['output'];
  eliminado: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  fecha_nacimiento: Scalars['DateTime']['output'];
  fecha_registro: Scalars['DateTime']['output'];
  localidad_id: Scalars['ID']['output'];
  municipio: Scalars['String']['output'];
  nombre: Scalars['String']['output'];
  numero_exterior: Scalars['String']['output'];
  numero_interior?: Maybe<Scalars['String']['output']>;
  proyectos_administrados: Array<Proyecto>;
  proyectos_contribuidos: Array<Proyecto>;
  telefono: Scalars['String']['output'];
  usuario: Scalars['String']['output'];
  usuario_id: Scalars['ID']['output'];
}

export type LocalidadesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalidadesQuery = { __typename?: 'Query', localidades: Array<{ __typename?: 'Localidad', estado: string, fecha_registro: any, localidad_id: string, nombre: string, pais: string }> };

export type ProyectosCreadosUsuarioQueryVariables = Exact<{
  usuario_id: Scalars['ID']['input'];
}>;


export type ProyectosCreadosUsuarioQuery = { __typename?: 'Query', usuario: { __typename?: 'Usuario', usuario_id: string, proyectos_administrados: Array<{ __typename?: 'Proyecto', descripcion: string, estado: EstadosProyecto, fecha_limite_implementacion: any, fecha_limite_recaudacion: any, fecha_registro: any, localidad_id: string, meta_recaudacion: number, nombre: string, proyecto_id: string, saldo: number, usuario_administrador_id: string }> } };

export type Crear_ProyectoMutationVariables = Exact<{
  crear_proyecto_input: CreateProyectoInput;
}>;


export type Crear_ProyectoMutation = { __typename?: 'Mutation', crear_proyecto: { __typename?: 'Proyecto', descripcion: string, estado: EstadosProyecto, fecha_limite_implementacion: any, fecha_limite_recaudacion: any, fecha_registro: any, localidad_id: string, meta_recaudacion: number, nombre: string, proyecto_id: string, saldo: number, usuario_administrador_id: string } };

export type ProyectosQueryVariables = Exact<{ [key: string]: never; }>;


export type ProyectosQuery = { __typename?: 'Query', proyectos: Array<{ __typename?: 'Proyecto', descripcion: string, estado: EstadosProyecto, fecha_limite_implementacion: any, fecha_limite_recaudacion: any, fecha_registro: any, localidad_id: string, meta_recaudacion: number, nombre: string, proyecto_id: string, saldo: number, usuario_administrador_id: string }> };

export type TrackProyectosQueryVariables = Exact<{
  usuario_id: Scalars['ID']['input'];
}>;


export type TrackProyectosQuery = { __typename?: 'Query', usuario: { __typename?: 'Usuario', usuario_id: string, proyectos_contribuidos: Array<{ __typename?: 'Proyecto', descripcion: string, estado: EstadosProyecto, fecha_limite_implementacion: any, fecha_limite_recaudacion: any, fecha_registro: any, localidad_id: string, meta_recaudacion: number, nombre: string, proyecto_id: string, saldo: number, usuario_administrador_id: string }> } };

export type Crear_ContribucionMutationVariables = Exact<{
  crear_contribucion: CreateContribucionInput;
}>;


export type Crear_ContribucionMutation = { __typename?: 'Mutation', crear_contribucion: { __typename?: 'Contribucion', contribucion_id: string, fecha_registro: any, monto: number, proyecto_id: string, usuario_id: string } };


export const LocalidadesDocument = gql`
    query Localidades {
  localidades {
    estado
    fecha_registro
    localidad_id
    nombre
    pais
  }
}
    `;
export type LocalidadesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LocalidadesQuery, LocalidadesQueryVariables>, 'query'>;

    export const LocalidadesComponent = (props: LocalidadesComponentProps) => (
      <ApolloReactComponents.Query<LocalidadesQuery, LocalidadesQueryVariables> query={LocalidadesDocument} {...props} />
    );
    

/**
 * __useLocalidadesQuery__
 *
 * To run a query within a React component, call `useLocalidadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalidadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalidadesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalidadesQuery(baseOptions?: Apollo.QueryHookOptions<LocalidadesQuery, LocalidadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocalidadesQuery, LocalidadesQueryVariables>(LocalidadesDocument, options);
      }
export function useLocalidadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocalidadesQuery, LocalidadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocalidadesQuery, LocalidadesQueryVariables>(LocalidadesDocument, options);
        }
export function useLocalidadesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LocalidadesQuery, LocalidadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LocalidadesQuery, LocalidadesQueryVariables>(LocalidadesDocument, options);
        }
export type LocalidadesQueryHookResult = ReturnType<typeof useLocalidadesQuery>;
export type LocalidadesLazyQueryHookResult = ReturnType<typeof useLocalidadesLazyQuery>;
export type LocalidadesSuspenseQueryHookResult = ReturnType<typeof useLocalidadesSuspenseQuery>;
export type LocalidadesQueryResult = Apollo.QueryResult<LocalidadesQuery, LocalidadesQueryVariables>;
export const ProyectosCreadosUsuarioDocument = gql`
    query ProyectosCreadosUsuario($usuario_id: ID!) {
  usuario(usuario_id: $usuario_id) {
    usuario_id
    proyectos_administrados {
      descripcion
      estado
      fecha_limite_implementacion
      fecha_limite_recaudacion
      fecha_registro
      localidad_id
      meta_recaudacion
      nombre
      proyecto_id
      saldo
      usuario_administrador_id
    }
  }
}
    `;
export type ProyectosCreadosUsuarioComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>, 'query'> & ({ variables: ProyectosCreadosUsuarioQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProyectosCreadosUsuarioComponent = (props: ProyectosCreadosUsuarioComponentProps) => (
      <ApolloReactComponents.Query<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables> query={ProyectosCreadosUsuarioDocument} {...props} />
    );
    

/**
 * __useProyectosCreadosUsuarioQuery__
 *
 * To run a query within a React component, call `useProyectosCreadosUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useProyectosCreadosUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProyectosCreadosUsuarioQuery({
 *   variables: {
 *      usuario_id: // value for 'usuario_id'
 *   },
 * });
 */
export function useProyectosCreadosUsuarioQuery(baseOptions: Apollo.QueryHookOptions<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables> & ({ variables: ProyectosCreadosUsuarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>(ProyectosCreadosUsuarioDocument, options);
      }
export function useProyectosCreadosUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>(ProyectosCreadosUsuarioDocument, options);
        }
export function useProyectosCreadosUsuarioSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>(ProyectosCreadosUsuarioDocument, options);
        }
export type ProyectosCreadosUsuarioQueryHookResult = ReturnType<typeof useProyectosCreadosUsuarioQuery>;
export type ProyectosCreadosUsuarioLazyQueryHookResult = ReturnType<typeof useProyectosCreadosUsuarioLazyQuery>;
export type ProyectosCreadosUsuarioSuspenseQueryHookResult = ReturnType<typeof useProyectosCreadosUsuarioSuspenseQuery>;
export type ProyectosCreadosUsuarioQueryResult = Apollo.QueryResult<ProyectosCreadosUsuarioQuery, ProyectosCreadosUsuarioQueryVariables>;
export const Crear_ProyectoDocument = gql`
    mutation Crear_proyecto($crear_proyecto_input: CreateProyectoInput!) {
  crear_proyecto(CreateProyectoInput: $crear_proyecto_input) {
    descripcion
    estado
    fecha_limite_implementacion
    fecha_limite_recaudacion
    fecha_registro
    localidad_id
    meta_recaudacion
    nombre
    proyecto_id
    saldo
    usuario_administrador_id
  }
}
    `;
export type Crear_ProyectoMutationFn = Apollo.MutationFunction<Crear_ProyectoMutation, Crear_ProyectoMutationVariables>;
export type Crear_ProyectoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Crear_ProyectoMutation, Crear_ProyectoMutationVariables>, 'mutation'>;

    export const Crear_ProyectoComponent = (props: Crear_ProyectoComponentProps) => (
      <ApolloReactComponents.Mutation<Crear_ProyectoMutation, Crear_ProyectoMutationVariables> mutation={Crear_ProyectoDocument} {...props} />
    );
    

/**
 * __useCrear_ProyectoMutation__
 *
 * To run a mutation, you first call `useCrear_ProyectoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrear_ProyectoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearProyectoMutation, { data, loading, error }] = useCrear_ProyectoMutation({
 *   variables: {
 *      crear_proyecto_input: // value for 'crear_proyecto_input'
 *   },
 * });
 */
export function useCrear_ProyectoMutation(baseOptions?: Apollo.MutationHookOptions<Crear_ProyectoMutation, Crear_ProyectoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Crear_ProyectoMutation, Crear_ProyectoMutationVariables>(Crear_ProyectoDocument, options);
      }
export type Crear_ProyectoMutationHookResult = ReturnType<typeof useCrear_ProyectoMutation>;
export type Crear_ProyectoMutationResult = Apollo.MutationResult<Crear_ProyectoMutation>;
export type Crear_ProyectoMutationOptions = Apollo.BaseMutationOptions<Crear_ProyectoMutation, Crear_ProyectoMutationVariables>;
export const ProyectosDocument = gql`
    query Proyectos {
  proyectos {
    descripcion
    estado
    fecha_limite_implementacion
    fecha_limite_recaudacion
    fecha_registro
    localidad_id
    meta_recaudacion
    nombre
    proyecto_id
    saldo
    usuario_administrador_id
  }
}
    `;
export type ProyectosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProyectosQuery, ProyectosQueryVariables>, 'query'>;

    export const ProyectosComponent = (props: ProyectosComponentProps) => (
      <ApolloReactComponents.Query<ProyectosQuery, ProyectosQueryVariables> query={ProyectosDocument} {...props} />
    );
    

/**
 * __useProyectosQuery__
 *
 * To run a query within a React component, call `useProyectosQuery` and pass it any options that fit your needs.
 * When your component renders, `useProyectosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProyectosQuery({
 *   variables: {
 *   },
 * });
 */
export function useProyectosQuery(baseOptions?: Apollo.QueryHookOptions<ProyectosQuery, ProyectosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProyectosQuery, ProyectosQueryVariables>(ProyectosDocument, options);
      }
export function useProyectosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProyectosQuery, ProyectosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProyectosQuery, ProyectosQueryVariables>(ProyectosDocument, options);
        }
export function useProyectosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProyectosQuery, ProyectosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProyectosQuery, ProyectosQueryVariables>(ProyectosDocument, options);
        }
export type ProyectosQueryHookResult = ReturnType<typeof useProyectosQuery>;
export type ProyectosLazyQueryHookResult = ReturnType<typeof useProyectosLazyQuery>;
export type ProyectosSuspenseQueryHookResult = ReturnType<typeof useProyectosSuspenseQuery>;
export type ProyectosQueryResult = Apollo.QueryResult<ProyectosQuery, ProyectosQueryVariables>;
export const TrackProyectosDocument = gql`
    query TrackProyectos($usuario_id: ID!) {
  usuario(usuario_id: $usuario_id) {
    usuario_id
    proyectos_contribuidos {
      descripcion
      estado
      fecha_limite_implementacion
      fecha_limite_recaudacion
      fecha_registro
      localidad_id
      meta_recaudacion
      nombre
      proyecto_id
      saldo
      usuario_administrador_id
    }
  }
}
    `;
export type TrackProyectosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrackProyectosQuery, TrackProyectosQueryVariables>, 'query'> & ({ variables: TrackProyectosQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TrackProyectosComponent = (props: TrackProyectosComponentProps) => (
      <ApolloReactComponents.Query<TrackProyectosQuery, TrackProyectosQueryVariables> query={TrackProyectosDocument} {...props} />
    );
    

/**
 * __useTrackProyectosQuery__
 *
 * To run a query within a React component, call `useTrackProyectosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackProyectosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackProyectosQuery({
 *   variables: {
 *      usuario_id: // value for 'usuario_id'
 *   },
 * });
 */
export function useTrackProyectosQuery(baseOptions: Apollo.QueryHookOptions<TrackProyectosQuery, TrackProyectosQueryVariables> & ({ variables: TrackProyectosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackProyectosQuery, TrackProyectosQueryVariables>(TrackProyectosDocument, options);
      }
export function useTrackProyectosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackProyectosQuery, TrackProyectosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackProyectosQuery, TrackProyectosQueryVariables>(TrackProyectosDocument, options);
        }
export function useTrackProyectosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrackProyectosQuery, TrackProyectosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrackProyectosQuery, TrackProyectosQueryVariables>(TrackProyectosDocument, options);
        }
export type TrackProyectosQueryHookResult = ReturnType<typeof useTrackProyectosQuery>;
export type TrackProyectosLazyQueryHookResult = ReturnType<typeof useTrackProyectosLazyQuery>;
export type TrackProyectosSuspenseQueryHookResult = ReturnType<typeof useTrackProyectosSuspenseQuery>;
export type TrackProyectosQueryResult = Apollo.QueryResult<TrackProyectosQuery, TrackProyectosQueryVariables>;
export const Crear_ContribucionDocument = gql`
    mutation Crear_contribucion($crear_contribucion: CreateContribucionInput!) {
  crear_contribucion(CreateContribucionInput: $crear_contribucion) {
    contribucion_id
    fecha_registro
    monto
    proyecto_id
    usuario_id
  }
}
    `;
export type Crear_ContribucionMutationFn = Apollo.MutationFunction<Crear_ContribucionMutation, Crear_ContribucionMutationVariables>;
export type Crear_ContribucionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Crear_ContribucionMutation, Crear_ContribucionMutationVariables>, 'mutation'>;

    export const Crear_ContribucionComponent = (props: Crear_ContribucionComponentProps) => (
      <ApolloReactComponents.Mutation<Crear_ContribucionMutation, Crear_ContribucionMutationVariables> mutation={Crear_ContribucionDocument} {...props} />
    );
    

/**
 * __useCrear_ContribucionMutation__
 *
 * To run a mutation, you first call `useCrear_ContribucionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrear_ContribucionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearContribucionMutation, { data, loading, error }] = useCrear_ContribucionMutation({
 *   variables: {
 *      crear_contribucion: // value for 'crear_contribucion'
 *   },
 * });
 */
export function useCrear_ContribucionMutation(baseOptions?: Apollo.MutationHookOptions<Crear_ContribucionMutation, Crear_ContribucionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Crear_ContribucionMutation, Crear_ContribucionMutationVariables>(Crear_ContribucionDocument, options);
      }
export type Crear_ContribucionMutationHookResult = ReturnType<typeof useCrear_ContribucionMutation>;
export type Crear_ContribucionMutationResult = Apollo.MutationResult<Crear_ContribucionMutation>;
export type Crear_ContribucionMutationOptions = Apollo.BaseMutationOptions<Crear_ContribucionMutation, Crear_ContribucionMutationVariables>;