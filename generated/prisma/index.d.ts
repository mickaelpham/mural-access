
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model WorkspaceUser
 * 
 */
export type WorkspaceUser = $Result.DefaultSelection<Prisma.$WorkspaceUserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomUser
 * 
 */
export type RoomUser = $Result.DefaultSelection<Prisma.$RoomUserPayload>
/**
 * Model Mural
 * 
 */
export type Mural = $Result.DefaultSelection<Prisma.$MuralPayload>
/**
 * Model MuralUser
 * 
 */
export type MuralUser = $Result.DefaultSelection<Prisma.$MuralUserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupUser
 * 
 */
export type GroupUser = $Result.DefaultSelection<Prisma.$GroupUserPayload>
/**
 * Model GroupWorkspace
 * 
 */
export type GroupWorkspace = $Result.DefaultSelection<Prisma.$GroupWorkspacePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkspaceUserRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  GUEST: 'GUEST'
};

export type WorkspaceUserRole = (typeof WorkspaceUserRole)[keyof typeof WorkspaceUserRole]


export const RoomUserRole: {
  ADMIN: 'ADMIN',
  FACILITATOR: 'FACILITATOR',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type RoomUserRole = (typeof RoomUserRole)[keyof typeof RoomUserRole]


export const MuralUserRole: {
  ADMIN: 'ADMIN',
  FACILITATOR: 'FACILITATOR',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type MuralUserRole = (typeof MuralUserRole)[keyof typeof MuralUserRole]


export const GroupWorkspaceRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type GroupWorkspaceRole = (typeof GroupWorkspaceRole)[keyof typeof GroupWorkspaceRole]

}

export type WorkspaceUserRole = $Enums.WorkspaceUserRole

export const WorkspaceUserRole: typeof $Enums.WorkspaceUserRole

export type RoomUserRole = $Enums.RoomUserRole

export const RoomUserRole: typeof $Enums.RoomUserRole

export type MuralUserRole = $Enums.MuralUserRole

export const MuralUserRole: typeof $Enums.MuralUserRole

export type GroupWorkspaceRole = $Enums.GroupWorkspaceRole

export const GroupWorkspaceRole: typeof $Enums.GroupWorkspaceRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceUser`: Exposes CRUD operations for the **WorkspaceUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceUsers
    * const workspaceUsers = await prisma.workspaceUser.findMany()
    * ```
    */
  get workspaceUser(): Prisma.WorkspaceUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomUser`: Exposes CRUD operations for the **RoomUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomUsers
    * const roomUsers = await prisma.roomUser.findMany()
    * ```
    */
  get roomUser(): Prisma.RoomUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mural`: Exposes CRUD operations for the **Mural** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Murals
    * const murals = await prisma.mural.findMany()
    * ```
    */
  get mural(): Prisma.MuralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muralUser`: Exposes CRUD operations for the **MuralUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MuralUsers
    * const muralUsers = await prisma.muralUser.findMany()
    * ```
    */
  get muralUser(): Prisma.MuralUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupUser`: Exposes CRUD operations for the **GroupUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupUsers
    * const groupUsers = await prisma.groupUser.findMany()
    * ```
    */
  get groupUser(): Prisma.GroupUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupWorkspace`: Exposes CRUD operations for the **GroupWorkspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupWorkspaces
    * const groupWorkspaces = await prisma.groupWorkspace.findMany()
    * ```
    */
  get groupWorkspace(): Prisma.GroupWorkspaceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Company: 'Company',
    Workspace: 'Workspace',
    WorkspaceUser: 'WorkspaceUser',
    Room: 'Room',
    RoomUser: 'RoomUser',
    Mural: 'Mural',
    MuralUser: 'MuralUser',
    Group: 'Group',
    GroupUser: 'GroupUser',
    GroupWorkspace: 'GroupWorkspace'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "workspace" | "workspaceUser" | "room" | "roomUser" | "mural" | "muralUser" | "group" | "groupUser" | "groupWorkspace"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceUser: {
        payload: Prisma.$WorkspaceUserPayload<ExtArgs>
        fields: Prisma.WorkspaceUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findMany: {
            args: Prisma.WorkspaceUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          create: {
            args: Prisma.WorkspaceUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          createMany: {
            args: Prisma.WorkspaceUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          update: {
            args: Prisma.WorkspaceUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceUser>
          }
          groupBy: {
            args: Prisma.WorkspaceUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceUserCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomUser: {
        payload: Prisma.$RoomUserPayload<ExtArgs>
        fields: Prisma.RoomUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          findFirst: {
            args: Prisma.RoomUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          findMany: {
            args: Prisma.RoomUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          create: {
            args: Prisma.RoomUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          createMany: {
            args: Prisma.RoomUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          delete: {
            args: Prisma.RoomUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          update: {
            args: Prisma.RoomUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          deleteMany: {
            args: Prisma.RoomUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          upsert: {
            args: Prisma.RoomUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          aggregate: {
            args: Prisma.RoomUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomUser>
          }
          groupBy: {
            args: Prisma.RoomUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomUserCountArgs<ExtArgs>
            result: $Utils.Optional<RoomUserCountAggregateOutputType> | number
          }
        }
      }
      Mural: {
        payload: Prisma.$MuralPayload<ExtArgs>
        fields: Prisma.MuralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          findFirst: {
            args: Prisma.MuralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          findMany: {
            args: Prisma.MuralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>[]
          }
          create: {
            args: Prisma.MuralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          createMany: {
            args: Prisma.MuralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>[]
          }
          delete: {
            args: Prisma.MuralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          update: {
            args: Prisma.MuralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          deleteMany: {
            args: Prisma.MuralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>[]
          }
          upsert: {
            args: Prisma.MuralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralPayload>
          }
          aggregate: {
            args: Prisma.MuralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMural>
          }
          groupBy: {
            args: Prisma.MuralGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuralGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuralCountArgs<ExtArgs>
            result: $Utils.Optional<MuralCountAggregateOutputType> | number
          }
        }
      }
      MuralUser: {
        payload: Prisma.$MuralUserPayload<ExtArgs>
        fields: Prisma.MuralUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuralUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuralUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          findFirst: {
            args: Prisma.MuralUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuralUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          findMany: {
            args: Prisma.MuralUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>[]
          }
          create: {
            args: Prisma.MuralUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          createMany: {
            args: Prisma.MuralUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuralUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>[]
          }
          delete: {
            args: Prisma.MuralUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          update: {
            args: Prisma.MuralUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          deleteMany: {
            args: Prisma.MuralUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuralUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuralUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>[]
          }
          upsert: {
            args: Prisma.MuralUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuralUserPayload>
          }
          aggregate: {
            args: Prisma.MuralUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuralUser>
          }
          groupBy: {
            args: Prisma.MuralUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuralUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuralUserCountArgs<ExtArgs>
            result: $Utils.Optional<MuralUserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupUser: {
        payload: Prisma.$GroupUserPayload<ExtArgs>
        fields: Prisma.GroupUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          findFirst: {
            args: Prisma.GroupUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          findMany: {
            args: Prisma.GroupUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>[]
          }
          create: {
            args: Prisma.GroupUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          createMany: {
            args: Prisma.GroupUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>[]
          }
          delete: {
            args: Prisma.GroupUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          update: {
            args: Prisma.GroupUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          deleteMany: {
            args: Prisma.GroupUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>[]
          }
          upsert: {
            args: Prisma.GroupUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupUserPayload>
          }
          aggregate: {
            args: Prisma.GroupUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupUser>
          }
          groupBy: {
            args: Prisma.GroupUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupUserCountArgs<ExtArgs>
            result: $Utils.Optional<GroupUserCountAggregateOutputType> | number
          }
        }
      }
      GroupWorkspace: {
        payload: Prisma.$GroupWorkspacePayload<ExtArgs>
        fields: Prisma.GroupWorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupWorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupWorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          findFirst: {
            args: Prisma.GroupWorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupWorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          findMany: {
            args: Prisma.GroupWorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>[]
          }
          create: {
            args: Prisma.GroupWorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          createMany: {
            args: Prisma.GroupWorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupWorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>[]
          }
          delete: {
            args: Prisma.GroupWorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          update: {
            args: Prisma.GroupWorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          deleteMany: {
            args: Prisma.GroupWorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupWorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupWorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>[]
          }
          upsert: {
            args: Prisma.GroupWorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupWorkspacePayload>
          }
          aggregate: {
            args: Prisma.GroupWorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupWorkspace>
          }
          groupBy: {
            args: Prisma.GroupWorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupWorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupWorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<GroupWorkspaceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    workspace?: WorkspaceOmit
    workspaceUser?: WorkspaceUserOmit
    room?: RoomOmit
    roomUser?: RoomUserOmit
    mural?: MuralOmit
    muralUser?: MuralUserOmit
    group?: GroupOmit
    groupUser?: GroupUserOmit
    groupWorkspace?: GroupWorkspaceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
    rooms: number
    murals: number
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    murals?: boolean | UserCountOutputTypeCountMuralsArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMuralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuralUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupUserWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    workspaces: number
    groups: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    workspaces?: boolean | CompanyCountOutputTypeCountWorkspacesArgs
    groups?: boolean | CompanyCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    rooms: number
    groups: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    rooms?: boolean | WorkspaceCountOutputTypeCountRoomsArgs
    groups?: boolean | WorkspaceCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWorkspaceWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    users: number
    murals: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoomCountOutputTypeCountUsersArgs
    murals?: boolean | RoomCountOutputTypeCountMuralsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMuralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuralWhereInput
  }


  /**
   * Count Type MuralCountOutputType
   */

  export type MuralCountOutputType = {
    users: number
  }

  export type MuralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MuralCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MuralCountOutputType without action
   */
  export type MuralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralCountOutputType
     */
    select?: MuralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuralCountOutputType without action
   */
  export type MuralCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuralUserWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    workspaces: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    workspaces?: boolean | GroupCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupUserWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWorkspaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    companyId: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    companyId: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    companyId: number
    displayName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    companyId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    companyId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    companyId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    companyId: string | null
    displayName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    companyId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    murals?: boolean | User$muralsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    companyId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    companyId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    companyId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "companyId" | "displayName" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    murals?: boolean | User$muralsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      workspaces: Prisma.$WorkspaceUserPayload<ExtArgs>[]
      rooms: Prisma.$RoomUserPayload<ExtArgs>[]
      murals: Prisma.$MuralUserPayload<ExtArgs>[]
      groups: Prisma.$GroupUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      companyId: string | null
      displayName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    murals<T extends User$muralsArgs<ExtArgs> = {}>(args?: Subset<T, User$muralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    cursor?: RoomUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * User.murals
   */
  export type User$muralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    where?: MuralUserWhereInput
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    cursor?: MuralUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuralUserScalarFieldEnum | MuralUserScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    where?: GroupUserWhereInput
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    cursor?: GroupUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupUserScalarFieldEnum | GroupUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    workspaces?: boolean | Company$workspacesArgs<ExtArgs>
    groups?: boolean | Company$groupsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    workspaces?: boolean | Company$workspacesArgs<ExtArgs>
    groups?: boolean | Company$groupsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends Company$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, Company$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Company$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Company$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
    readonly deletedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.workspaces
   */
  export type Company$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Company.groups
   */
  export type Company$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    companyId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    rooms?: boolean | Workspace$roomsArgs<ExtArgs>
    company?: boolean | Workspace$companyArgs<ExtArgs>
    groups?: boolean | Workspace$groupsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | Workspace$companyArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | Workspace$companyArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    rooms?: boolean | Workspace$roomsArgs<ExtArgs>
    company?: boolean | Workspace$companyArgs<ExtArgs>
    groups?: boolean | Workspace$groupsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Workspace$companyArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Workspace$companyArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$WorkspaceUserPayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs> | null
      groups: Prisma.$GroupWorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends Workspace$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends Workspace$companyArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groups<T extends Workspace$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly companyId: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
    readonly deletedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * Workspace.rooms
   */
  export type Workspace$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Workspace.company
   */
  export type Workspace$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Workspace.groups
   */
  export type Workspace$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    where?: GroupWorkspaceWhereInput
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    cursor?: GroupWorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupWorkspaceScalarFieldEnum | GroupWorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceUser
   */

  export type AggregateWorkspaceUser = {
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  export type WorkspaceUserMinAggregateOutputType = {
    userId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.WorkspaceUserRole | null
  }

  export type WorkspaceUserMaxAggregateOutputType = {
    userId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.WorkspaceUserRole | null
  }

  export type WorkspaceUserCountAggregateOutputType = {
    userId: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type WorkspaceUserMinAggregateInputType = {
    userId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type WorkspaceUserMaxAggregateInputType = {
    userId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type WorkspaceUserCountAggregateInputType = {
    userId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type WorkspaceUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUser to aggregate.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceUsers
    **/
    _count?: true | WorkspaceUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type GetWorkspaceUserAggregateType<T extends WorkspaceUserAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceUser[P]>
      : GetScalarType<T[P], AggregateWorkspaceUser[P]>
  }




  export type WorkspaceUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithAggregationInput | WorkspaceUserOrderByWithAggregationInput[]
    by: WorkspaceUserScalarFieldEnum[] | WorkspaceUserScalarFieldEnum
    having?: WorkspaceUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceUserCountAggregateInputType | true
    _min?: WorkspaceUserMinAggregateInputType
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type WorkspaceUserGroupByOutputType = {
    userId: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    role: $Enums.WorkspaceUserRole
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  type GetWorkspaceUserGroupByPayload<T extends WorkspaceUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectScalar = {
    userId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type WorkspaceUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "workspaceId" | "createdAt" | "updatedAt" | "deletedAt" | "role", ExtArgs["result"]["workspaceUser"]>
  export type WorkspaceUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WorkspaceUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      role: $Enums.WorkspaceUserRole
    }, ExtArgs["result"]["workspaceUser"]>
    composites: {}
  }

  type WorkspaceUserGetPayload<S extends boolean | null | undefined | WorkspaceUserDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceUserPayload, S>

  type WorkspaceUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceUserCountAggregateInputType | true
    }

  export interface WorkspaceUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceUser'], meta: { name: 'WorkspaceUser' } }
    /**
     * Find zero or one WorkspaceUser that matches the filter.
     * @param {WorkspaceUserFindUniqueArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceUserFindUniqueArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceUserFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceUserFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceUserFindFirstArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceUserFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany()
     * 
     * // Get first 10 WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const workspaceUserWithUserIdOnly = await prisma.workspaceUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends WorkspaceUserFindManyArgs>(args?: SelectSubset<T, WorkspaceUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceUser.
     * @param {WorkspaceUserCreateArgs} args - Arguments to create a WorkspaceUser.
     * @example
     * // Create one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.create({
     *   data: {
     *     // ... data to create a WorkspaceUser
     *   }
     * })
     * 
     */
    create<T extends WorkspaceUserCreateArgs>(args: SelectSubset<T, WorkspaceUserCreateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceUsers.
     * @param {WorkspaceUserCreateManyArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceUserCreateManyArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceUsers and returns the data saved in the database.
     * @param {WorkspaceUserCreateManyAndReturnArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceUsers and only return the `userId`
     * const workspaceUserWithUserIdOnly = await prisma.workspaceUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceUserCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceUser.
     * @param {WorkspaceUserDeleteArgs} args - Arguments to delete one WorkspaceUser.
     * @example
     * // Delete one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceUser
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceUserDeleteArgs>(args: SelectSubset<T, WorkspaceUserDeleteArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceUser.
     * @param {WorkspaceUserUpdateArgs} args - Arguments to update one WorkspaceUser.
     * @example
     * // Update one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUserUpdateArgs>(args: SelectSubset<T, WorkspaceUserUpdateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceUsers.
     * @param {WorkspaceUserDeleteManyArgs} args - Arguments to filter WorkspaceUsers to delete.
     * @example
     * // Delete a few WorkspaceUsers
     * const { count } = await prisma.workspaceUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceUserDeleteManyArgs>(args?: SelectSubset<T, WorkspaceUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUserUpdateManyArgs>(args: SelectSubset<T, WorkspaceUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceUsers and returns the data updated in the database.
     * @param {WorkspaceUserUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceUsers.
     * @example
     * // Update many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceUsers and only return the `userId`
     * const workspaceUserWithUserIdOnly = await prisma.workspaceUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUserUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceUser.
     * @param {WorkspaceUserUpsertArgs} args - Arguments to update or create a WorkspaceUser.
     * @example
     * // Update or create a WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.upsert({
     *   create: {
     *     // ... data to create a WorkspaceUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceUser we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUserUpsertArgs>(args: SelectSubset<T, WorkspaceUserUpsertArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserCountArgs} args - Arguments to filter WorkspaceUsers to count.
     * @example
     * // Count the number of WorkspaceUsers
     * const count = await prisma.workspaceUser.count({
     *   where: {
     *     // ... the filter for the WorkspaceUsers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceUserCountArgs>(
      args?: Subset<T, WorkspaceUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceUserAggregateArgs>(args: Subset<T, WorkspaceUserAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceUserAggregateType<T>>

    /**
     * Group by WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceUserGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceUser model
   */
  readonly fields: WorkspaceUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceUser model
   */
  interface WorkspaceUserFieldRefs {
    readonly userId: FieldRef<"WorkspaceUser", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceUser", 'String'>
    readonly createdAt: FieldRef<"WorkspaceUser", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkspaceUser", 'DateTime'>
    readonly deletedAt: FieldRef<"WorkspaceUser", 'DateTime'>
    readonly role: FieldRef<"WorkspaceUser", 'WorkspaceUserRole'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceUser findUnique
   */
  export type WorkspaceUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findUniqueOrThrow
   */
  export type WorkspaceUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findFirst
   */
  export type WorkspaceUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findFirstOrThrow
   */
  export type WorkspaceUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findMany
   */
  export type WorkspaceUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUsers to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser create
   */
  export type WorkspaceUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceUser.
     */
    data: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
  }

  /**
   * WorkspaceUser createMany
   */
  export type WorkspaceUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceUser createManyAndReturn
   */
  export type WorkspaceUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceUser update
   */
  export type WorkspaceUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceUser.
     */
    data: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceUser to update.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser updateMany
   */
  export type WorkspaceUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceUsers.
     */
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceUsers to update
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceUser updateManyAndReturn
   */
  export type WorkspaceUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceUsers.
     */
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceUsers to update
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceUser upsert
   */
  export type WorkspaceUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceUser to update in case it exists.
     */
    where: WorkspaceUserWhereUniqueInput
    /**
     * In case the WorkspaceUser found by the `where` argument doesn't exist, create a new WorkspaceUser with this data.
     */
    create: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
    /**
     * In case the WorkspaceUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
  }

  /**
   * WorkspaceUser delete
   */
  export type WorkspaceUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceUser to delete.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser deleteMany
   */
  export type WorkspaceUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUsers to delete
     */
    where?: WorkspaceUserWhereInput
    /**
     * Limit how many WorkspaceUsers to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceUser without action
   */
  export type WorkspaceUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceUser
     */
    omit?: WorkspaceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    workspaceId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    workspaceId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    workspaceId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    workspaceId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    workspaceId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    workspaceId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    workspaceId: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    users?: boolean | Room$usersArgs<ExtArgs>
    murals?: boolean | Room$muralsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    workspaceId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt" | "workspaceId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    users?: boolean | Room$usersArgs<ExtArgs>
    murals?: boolean | Room$muralsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      users: Prisma.$RoomUserPayload<ExtArgs>[]
      murals: Prisma.$MuralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      workspaceId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Room$usersArgs<ExtArgs> = {}>(args?: Subset<T, Room$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    murals<T extends Room$muralsArgs<ExtArgs> = {}>(args?: Subset<T, Room$muralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
    readonly deletedAt: FieldRef<"Room", 'DateTime'>
    readonly workspaceId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.users
   */
  export type Room$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    cursor?: RoomUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * Room.murals
   */
  export type Room$muralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    where?: MuralWhereInput
    orderBy?: MuralOrderByWithRelationInput | MuralOrderByWithRelationInput[]
    cursor?: MuralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuralScalarFieldEnum | MuralScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomUser
   */

  export type AggregateRoomUser = {
    _count: RoomUserCountAggregateOutputType | null
    _min: RoomUserMinAggregateOutputType | null
    _max: RoomUserMaxAggregateOutputType | null
  }

  export type RoomUserMinAggregateOutputType = {
    roomId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.RoomUserRole | null
  }

  export type RoomUserMaxAggregateOutputType = {
    roomId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.RoomUserRole | null
  }

  export type RoomUserCountAggregateOutputType = {
    roomId: number
    userId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type RoomUserMinAggregateInputType = {
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type RoomUserMaxAggregateInputType = {
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type RoomUserCountAggregateInputType = {
    roomId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type RoomUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomUser to aggregate.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomUsers
    **/
    _count?: true | RoomUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomUserMaxAggregateInputType
  }

  export type GetRoomUserAggregateType<T extends RoomUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomUser[P]>
      : GetScalarType<T[P], AggregateRoomUser[P]>
  }




  export type RoomUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithAggregationInput | RoomUserOrderByWithAggregationInput[]
    by: RoomUserScalarFieldEnum[] | RoomUserScalarFieldEnum
    having?: RoomUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomUserCountAggregateInputType | true
    _min?: RoomUserMinAggregateInputType
    _max?: RoomUserMaxAggregateInputType
  }

  export type RoomUserGroupByOutputType = {
    roomId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    role: $Enums.RoomUserRole
    _count: RoomUserCountAggregateOutputType | null
    _min: RoomUserMinAggregateOutputType | null
    _max: RoomUserMaxAggregateOutputType | null
  }

  type GetRoomUserGroupByPayload<T extends RoomUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomUserGroupByOutputType[P]>
            : GetScalarType<T[P], RoomUserGroupByOutputType[P]>
        }
      >
    >


  export type RoomUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectScalar = {
    roomId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type RoomUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roomId" | "userId" | "createdAt" | "updatedAt" | "deletedAt" | "role", ExtArgs["result"]["roomUser"]>
  export type RoomUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomUser"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roomId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      role: $Enums.RoomUserRole
    }, ExtArgs["result"]["roomUser"]>
    composites: {}
  }

  type RoomUserGetPayload<S extends boolean | null | undefined | RoomUserDefaultArgs> = $Result.GetResult<Prisma.$RoomUserPayload, S>

  type RoomUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomUserCountAggregateInputType | true
    }

  export interface RoomUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomUser'], meta: { name: 'RoomUser' } }
    /**
     * Find zero or one RoomUser that matches the filter.
     * @param {RoomUserFindUniqueArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomUserFindUniqueArgs>(args: SelectSubset<T, RoomUserFindUniqueArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomUserFindUniqueOrThrowArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomUserFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindFirstArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomUserFindFirstArgs>(args?: SelectSubset<T, RoomUserFindFirstArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindFirstOrThrowArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomUserFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomUsers
     * const roomUsers = await prisma.roomUser.findMany()
     * 
     * // Get first 10 RoomUsers
     * const roomUsers = await prisma.roomUser.findMany({ take: 10 })
     * 
     * // Only select the `roomId`
     * const roomUserWithRoomIdOnly = await prisma.roomUser.findMany({ select: { roomId: true } })
     * 
     */
    findMany<T extends RoomUserFindManyArgs>(args?: SelectSubset<T, RoomUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomUser.
     * @param {RoomUserCreateArgs} args - Arguments to create a RoomUser.
     * @example
     * // Create one RoomUser
     * const RoomUser = await prisma.roomUser.create({
     *   data: {
     *     // ... data to create a RoomUser
     *   }
     * })
     * 
     */
    create<T extends RoomUserCreateArgs>(args: SelectSubset<T, RoomUserCreateArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomUsers.
     * @param {RoomUserCreateManyArgs} args - Arguments to create many RoomUsers.
     * @example
     * // Create many RoomUsers
     * const roomUser = await prisma.roomUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomUserCreateManyArgs>(args?: SelectSubset<T, RoomUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomUsers and returns the data saved in the database.
     * @param {RoomUserCreateManyAndReturnArgs} args - Arguments to create many RoomUsers.
     * @example
     * // Create many RoomUsers
     * const roomUser = await prisma.roomUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomUsers and only return the `roomId`
     * const roomUserWithRoomIdOnly = await prisma.roomUser.createManyAndReturn({
     *   select: { roomId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomUserCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomUser.
     * @param {RoomUserDeleteArgs} args - Arguments to delete one RoomUser.
     * @example
     * // Delete one RoomUser
     * const RoomUser = await prisma.roomUser.delete({
     *   where: {
     *     // ... filter to delete one RoomUser
     *   }
     * })
     * 
     */
    delete<T extends RoomUserDeleteArgs>(args: SelectSubset<T, RoomUserDeleteArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomUser.
     * @param {RoomUserUpdateArgs} args - Arguments to update one RoomUser.
     * @example
     * // Update one RoomUser
     * const roomUser = await prisma.roomUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUserUpdateArgs>(args: SelectSubset<T, RoomUserUpdateArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomUsers.
     * @param {RoomUserDeleteManyArgs} args - Arguments to filter RoomUsers to delete.
     * @example
     * // Delete a few RoomUsers
     * const { count } = await prisma.roomUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomUserDeleteManyArgs>(args?: SelectSubset<T, RoomUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomUsers
     * const roomUser = await prisma.roomUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUserUpdateManyArgs>(args: SelectSubset<T, RoomUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomUsers and returns the data updated in the database.
     * @param {RoomUserUpdateManyAndReturnArgs} args - Arguments to update many RoomUsers.
     * @example
     * // Update many RoomUsers
     * const roomUser = await prisma.roomUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomUsers and only return the `roomId`
     * const roomUserWithRoomIdOnly = await prisma.roomUser.updateManyAndReturn({
     *   select: { roomId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUserUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomUser.
     * @param {RoomUserUpsertArgs} args - Arguments to update or create a RoomUser.
     * @example
     * // Update or create a RoomUser
     * const roomUser = await prisma.roomUser.upsert({
     *   create: {
     *     // ... data to create a RoomUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomUser we want to update
     *   }
     * })
     */
    upsert<T extends RoomUserUpsertArgs>(args: SelectSubset<T, RoomUserUpsertArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserCountArgs} args - Arguments to filter RoomUsers to count.
     * @example
     * // Count the number of RoomUsers
     * const count = await prisma.roomUser.count({
     *   where: {
     *     // ... the filter for the RoomUsers we want to count
     *   }
     * })
    **/
    count<T extends RoomUserCountArgs>(
      args?: Subset<T, RoomUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomUserAggregateArgs>(args: Subset<T, RoomUserAggregateArgs>): Prisma.PrismaPromise<GetRoomUserAggregateType<T>>

    /**
     * Group by RoomUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomUserGroupByArgs['orderBy'] }
        : { orderBy?: RoomUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomUser model
   */
  readonly fields: RoomUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomUser model
   */
  interface RoomUserFieldRefs {
    readonly roomId: FieldRef<"RoomUser", 'String'>
    readonly userId: FieldRef<"RoomUser", 'String'>
    readonly createdAt: FieldRef<"RoomUser", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomUser", 'DateTime'>
    readonly deletedAt: FieldRef<"RoomUser", 'DateTime'>
    readonly role: FieldRef<"RoomUser", 'RoomUserRole'>
  }
    

  // Custom InputTypes
  /**
   * RoomUser findUnique
   */
  export type RoomUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser findUniqueOrThrow
   */
  export type RoomUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser findFirst
   */
  export type RoomUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomUsers.
     */
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser findFirstOrThrow
   */
  export type RoomUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomUsers.
     */
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser findMany
   */
  export type RoomUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUsers to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser create
   */
  export type RoomUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomUser.
     */
    data: XOR<RoomUserCreateInput, RoomUserUncheckedCreateInput>
  }

  /**
   * RoomUser createMany
   */
  export type RoomUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomUsers.
     */
    data: RoomUserCreateManyInput | RoomUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomUser createManyAndReturn
   */
  export type RoomUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * The data used to create many RoomUsers.
     */
    data: RoomUserCreateManyInput | RoomUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomUser update
   */
  export type RoomUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomUser.
     */
    data: XOR<RoomUserUpdateInput, RoomUserUncheckedUpdateInput>
    /**
     * Choose, which RoomUser to update.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser updateMany
   */
  export type RoomUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomUsers.
     */
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyInput>
    /**
     * Filter which RoomUsers to update
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to update.
     */
    limit?: number
  }

  /**
   * RoomUser updateManyAndReturn
   */
  export type RoomUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * The data used to update RoomUsers.
     */
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyInput>
    /**
     * Filter which RoomUsers to update
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomUser upsert
   */
  export type RoomUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomUser to update in case it exists.
     */
    where: RoomUserWhereUniqueInput
    /**
     * In case the RoomUser found by the `where` argument doesn't exist, create a new RoomUser with this data.
     */
    create: XOR<RoomUserCreateInput, RoomUserUncheckedCreateInput>
    /**
     * In case the RoomUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUserUpdateInput, RoomUserUncheckedUpdateInput>
  }

  /**
   * RoomUser delete
   */
  export type RoomUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter which RoomUser to delete.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser deleteMany
   */
  export type RoomUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomUsers to delete
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to delete.
     */
    limit?: number
  }

  /**
   * RoomUser without action
   */
  export type RoomUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
  }


  /**
   * Model Mural
   */

  export type AggregateMural = {
    _count: MuralCountAggregateOutputType | null
    _min: MuralMinAggregateOutputType | null
    _max: MuralMaxAggregateOutputType | null
  }

  export type MuralMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    roomId: string | null
  }

  export type MuralMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    roomId: string | null
  }

  export type MuralCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    roomId: number
    _all: number
  }


  export type MuralMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roomId?: true
  }

  export type MuralMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roomId?: true
  }

  export type MuralCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roomId?: true
    _all?: true
  }

  export type MuralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mural to aggregate.
     */
    where?: MuralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Murals to fetch.
     */
    orderBy?: MuralOrderByWithRelationInput | MuralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Murals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Murals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Murals
    **/
    _count?: true | MuralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuralMaxAggregateInputType
  }

  export type GetMuralAggregateType<T extends MuralAggregateArgs> = {
        [P in keyof T & keyof AggregateMural]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMural[P]>
      : GetScalarType<T[P], AggregateMural[P]>
  }




  export type MuralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuralWhereInput
    orderBy?: MuralOrderByWithAggregationInput | MuralOrderByWithAggregationInput[]
    by: MuralScalarFieldEnum[] | MuralScalarFieldEnum
    having?: MuralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuralCountAggregateInputType | true
    _min?: MuralMinAggregateInputType
    _max?: MuralMaxAggregateInputType
  }

  export type MuralGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    roomId: string
    _count: MuralCountAggregateOutputType | null
    _min: MuralMinAggregateOutputType | null
    _max: MuralMaxAggregateOutputType | null
  }

  type GetMuralGroupByPayload<T extends MuralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuralGroupByOutputType[P]>
            : GetScalarType<T[P], MuralGroupByOutputType[P]>
        }
      >
    >


  export type MuralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    users?: boolean | Mural$usersArgs<ExtArgs>
    _count?: boolean | MuralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mural"]>

  export type MuralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mural"]>

  export type MuralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mural"]>

  export type MuralSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roomId?: boolean
  }

  export type MuralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "deletedAt" | "roomId", ExtArgs["result"]["mural"]>
  export type MuralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    users?: boolean | Mural$usersArgs<ExtArgs>
    _count?: boolean | MuralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type MuralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $MuralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mural"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      users: Prisma.$MuralUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      roomId: string
    }, ExtArgs["result"]["mural"]>
    composites: {}
  }

  type MuralGetPayload<S extends boolean | null | undefined | MuralDefaultArgs> = $Result.GetResult<Prisma.$MuralPayload, S>

  type MuralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuralCountAggregateInputType | true
    }

  export interface MuralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mural'], meta: { name: 'Mural' } }
    /**
     * Find zero or one Mural that matches the filter.
     * @param {MuralFindUniqueArgs} args - Arguments to find a Mural
     * @example
     * // Get one Mural
     * const mural = await prisma.mural.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuralFindUniqueArgs>(args: SelectSubset<T, MuralFindUniqueArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mural that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuralFindUniqueOrThrowArgs} args - Arguments to find a Mural
     * @example
     * // Get one Mural
     * const mural = await prisma.mural.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuralFindUniqueOrThrowArgs>(args: SelectSubset<T, MuralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mural that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralFindFirstArgs} args - Arguments to find a Mural
     * @example
     * // Get one Mural
     * const mural = await prisma.mural.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuralFindFirstArgs>(args?: SelectSubset<T, MuralFindFirstArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mural that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralFindFirstOrThrowArgs} args - Arguments to find a Mural
     * @example
     * // Get one Mural
     * const mural = await prisma.mural.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuralFindFirstOrThrowArgs>(args?: SelectSubset<T, MuralFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Murals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Murals
     * const murals = await prisma.mural.findMany()
     * 
     * // Get first 10 Murals
     * const murals = await prisma.mural.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muralWithIdOnly = await prisma.mural.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuralFindManyArgs>(args?: SelectSubset<T, MuralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mural.
     * @param {MuralCreateArgs} args - Arguments to create a Mural.
     * @example
     * // Create one Mural
     * const Mural = await prisma.mural.create({
     *   data: {
     *     // ... data to create a Mural
     *   }
     * })
     * 
     */
    create<T extends MuralCreateArgs>(args: SelectSubset<T, MuralCreateArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Murals.
     * @param {MuralCreateManyArgs} args - Arguments to create many Murals.
     * @example
     * // Create many Murals
     * const mural = await prisma.mural.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuralCreateManyArgs>(args?: SelectSubset<T, MuralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Murals and returns the data saved in the database.
     * @param {MuralCreateManyAndReturnArgs} args - Arguments to create many Murals.
     * @example
     * // Create many Murals
     * const mural = await prisma.mural.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Murals and only return the `id`
     * const muralWithIdOnly = await prisma.mural.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuralCreateManyAndReturnArgs>(args?: SelectSubset<T, MuralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mural.
     * @param {MuralDeleteArgs} args - Arguments to delete one Mural.
     * @example
     * // Delete one Mural
     * const Mural = await prisma.mural.delete({
     *   where: {
     *     // ... filter to delete one Mural
     *   }
     * })
     * 
     */
    delete<T extends MuralDeleteArgs>(args: SelectSubset<T, MuralDeleteArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mural.
     * @param {MuralUpdateArgs} args - Arguments to update one Mural.
     * @example
     * // Update one Mural
     * const mural = await prisma.mural.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuralUpdateArgs>(args: SelectSubset<T, MuralUpdateArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Murals.
     * @param {MuralDeleteManyArgs} args - Arguments to filter Murals to delete.
     * @example
     * // Delete a few Murals
     * const { count } = await prisma.mural.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuralDeleteManyArgs>(args?: SelectSubset<T, MuralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Murals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Murals
     * const mural = await prisma.mural.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuralUpdateManyArgs>(args: SelectSubset<T, MuralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Murals and returns the data updated in the database.
     * @param {MuralUpdateManyAndReturnArgs} args - Arguments to update many Murals.
     * @example
     * // Update many Murals
     * const mural = await prisma.mural.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Murals and only return the `id`
     * const muralWithIdOnly = await prisma.mural.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MuralUpdateManyAndReturnArgs>(args: SelectSubset<T, MuralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mural.
     * @param {MuralUpsertArgs} args - Arguments to update or create a Mural.
     * @example
     * // Update or create a Mural
     * const mural = await prisma.mural.upsert({
     *   create: {
     *     // ... data to create a Mural
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mural we want to update
     *   }
     * })
     */
    upsert<T extends MuralUpsertArgs>(args: SelectSubset<T, MuralUpsertArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Murals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralCountArgs} args - Arguments to filter Murals to count.
     * @example
     * // Count the number of Murals
     * const count = await prisma.mural.count({
     *   where: {
     *     // ... the filter for the Murals we want to count
     *   }
     * })
    **/
    count<T extends MuralCountArgs>(
      args?: Subset<T, MuralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mural.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuralAggregateArgs>(args: Subset<T, MuralAggregateArgs>): Prisma.PrismaPromise<GetMuralAggregateType<T>>

    /**
     * Group by Mural.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MuralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuralGroupByArgs['orderBy'] }
        : { orderBy?: MuralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MuralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mural model
   */
  readonly fields: MuralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mural.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Mural$usersArgs<ExtArgs> = {}>(args?: Subset<T, Mural$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mural model
   */
  interface MuralFieldRefs {
    readonly id: FieldRef<"Mural", 'String'>
    readonly title: FieldRef<"Mural", 'String'>
    readonly createdAt: FieldRef<"Mural", 'DateTime'>
    readonly updatedAt: FieldRef<"Mural", 'DateTime'>
    readonly deletedAt: FieldRef<"Mural", 'DateTime'>
    readonly roomId: FieldRef<"Mural", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mural findUnique
   */
  export type MuralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter, which Mural to fetch.
     */
    where: MuralWhereUniqueInput
  }

  /**
   * Mural findUniqueOrThrow
   */
  export type MuralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter, which Mural to fetch.
     */
    where: MuralWhereUniqueInput
  }

  /**
   * Mural findFirst
   */
  export type MuralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter, which Mural to fetch.
     */
    where?: MuralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Murals to fetch.
     */
    orderBy?: MuralOrderByWithRelationInput | MuralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Murals.
     */
    cursor?: MuralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Murals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Murals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Murals.
     */
    distinct?: MuralScalarFieldEnum | MuralScalarFieldEnum[]
  }

  /**
   * Mural findFirstOrThrow
   */
  export type MuralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter, which Mural to fetch.
     */
    where?: MuralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Murals to fetch.
     */
    orderBy?: MuralOrderByWithRelationInput | MuralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Murals.
     */
    cursor?: MuralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Murals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Murals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Murals.
     */
    distinct?: MuralScalarFieldEnum | MuralScalarFieldEnum[]
  }

  /**
   * Mural findMany
   */
  export type MuralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter, which Murals to fetch.
     */
    where?: MuralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Murals to fetch.
     */
    orderBy?: MuralOrderByWithRelationInput | MuralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Murals.
     */
    cursor?: MuralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Murals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Murals.
     */
    skip?: number
    distinct?: MuralScalarFieldEnum | MuralScalarFieldEnum[]
  }

  /**
   * Mural create
   */
  export type MuralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * The data needed to create a Mural.
     */
    data: XOR<MuralCreateInput, MuralUncheckedCreateInput>
  }

  /**
   * Mural createMany
   */
  export type MuralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Murals.
     */
    data: MuralCreateManyInput | MuralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mural createManyAndReturn
   */
  export type MuralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * The data used to create many Murals.
     */
    data: MuralCreateManyInput | MuralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mural update
   */
  export type MuralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * The data needed to update a Mural.
     */
    data: XOR<MuralUpdateInput, MuralUncheckedUpdateInput>
    /**
     * Choose, which Mural to update.
     */
    where: MuralWhereUniqueInput
  }

  /**
   * Mural updateMany
   */
  export type MuralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Murals.
     */
    data: XOR<MuralUpdateManyMutationInput, MuralUncheckedUpdateManyInput>
    /**
     * Filter which Murals to update
     */
    where?: MuralWhereInput
    /**
     * Limit how many Murals to update.
     */
    limit?: number
  }

  /**
   * Mural updateManyAndReturn
   */
  export type MuralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * The data used to update Murals.
     */
    data: XOR<MuralUpdateManyMutationInput, MuralUncheckedUpdateManyInput>
    /**
     * Filter which Murals to update
     */
    where?: MuralWhereInput
    /**
     * Limit how many Murals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mural upsert
   */
  export type MuralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * The filter to search for the Mural to update in case it exists.
     */
    where: MuralWhereUniqueInput
    /**
     * In case the Mural found by the `where` argument doesn't exist, create a new Mural with this data.
     */
    create: XOR<MuralCreateInput, MuralUncheckedCreateInput>
    /**
     * In case the Mural was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuralUpdateInput, MuralUncheckedUpdateInput>
  }

  /**
   * Mural delete
   */
  export type MuralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
    /**
     * Filter which Mural to delete.
     */
    where: MuralWhereUniqueInput
  }

  /**
   * Mural deleteMany
   */
  export type MuralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Murals to delete
     */
    where?: MuralWhereInput
    /**
     * Limit how many Murals to delete.
     */
    limit?: number
  }

  /**
   * Mural.users
   */
  export type Mural$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    where?: MuralUserWhereInput
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    cursor?: MuralUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuralUserScalarFieldEnum | MuralUserScalarFieldEnum[]
  }

  /**
   * Mural without action
   */
  export type MuralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mural
     */
    select?: MuralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mural
     */
    omit?: MuralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralInclude<ExtArgs> | null
  }


  /**
   * Model MuralUser
   */

  export type AggregateMuralUser = {
    _count: MuralUserCountAggregateOutputType | null
    _min: MuralUserMinAggregateOutputType | null
    _max: MuralUserMaxAggregateOutputType | null
  }

  export type MuralUserMinAggregateOutputType = {
    muralId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.MuralUserRole | null
  }

  export type MuralUserMaxAggregateOutputType = {
    muralId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.MuralUserRole | null
  }

  export type MuralUserCountAggregateOutputType = {
    muralId: number
    userId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type MuralUserMinAggregateInputType = {
    muralId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type MuralUserMaxAggregateInputType = {
    muralId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type MuralUserCountAggregateInputType = {
    muralId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type MuralUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuralUser to aggregate.
     */
    where?: MuralUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuralUsers to fetch.
     */
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuralUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuralUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuralUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MuralUsers
    **/
    _count?: true | MuralUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuralUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuralUserMaxAggregateInputType
  }

  export type GetMuralUserAggregateType<T extends MuralUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMuralUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuralUser[P]>
      : GetScalarType<T[P], AggregateMuralUser[P]>
  }




  export type MuralUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuralUserWhereInput
    orderBy?: MuralUserOrderByWithAggregationInput | MuralUserOrderByWithAggregationInput[]
    by: MuralUserScalarFieldEnum[] | MuralUserScalarFieldEnum
    having?: MuralUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuralUserCountAggregateInputType | true
    _min?: MuralUserMinAggregateInputType
    _max?: MuralUserMaxAggregateInputType
  }

  export type MuralUserGroupByOutputType = {
    muralId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    role: $Enums.MuralUserRole
    _count: MuralUserCountAggregateOutputType | null
    _min: MuralUserMinAggregateOutputType | null
    _max: MuralUserMaxAggregateOutputType | null
  }

  type GetMuralUserGroupByPayload<T extends MuralUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuralUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuralUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuralUserGroupByOutputType[P]>
            : GetScalarType<T[P], MuralUserGroupByOutputType[P]>
        }
      >
    >


  export type MuralUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    muralId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muralUser"]>

  export type MuralUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    muralId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muralUser"]>

  export type MuralUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    muralId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muralUser"]>

  export type MuralUserSelectScalar = {
    muralId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type MuralUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"muralId" | "userId" | "createdAt" | "updatedAt" | "deletedAt" | "role", ExtArgs["result"]["muralUser"]>
  export type MuralUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MuralUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MuralUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mural?: boolean | MuralDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MuralUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MuralUser"
    objects: {
      mural: Prisma.$MuralPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      muralId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      role: $Enums.MuralUserRole
    }, ExtArgs["result"]["muralUser"]>
    composites: {}
  }

  type MuralUserGetPayload<S extends boolean | null | undefined | MuralUserDefaultArgs> = $Result.GetResult<Prisma.$MuralUserPayload, S>

  type MuralUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuralUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuralUserCountAggregateInputType | true
    }

  export interface MuralUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MuralUser'], meta: { name: 'MuralUser' } }
    /**
     * Find zero or one MuralUser that matches the filter.
     * @param {MuralUserFindUniqueArgs} args - Arguments to find a MuralUser
     * @example
     * // Get one MuralUser
     * const muralUser = await prisma.muralUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuralUserFindUniqueArgs>(args: SelectSubset<T, MuralUserFindUniqueArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MuralUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuralUserFindUniqueOrThrowArgs} args - Arguments to find a MuralUser
     * @example
     * // Get one MuralUser
     * const muralUser = await prisma.muralUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuralUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MuralUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuralUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserFindFirstArgs} args - Arguments to find a MuralUser
     * @example
     * // Get one MuralUser
     * const muralUser = await prisma.muralUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuralUserFindFirstArgs>(args?: SelectSubset<T, MuralUserFindFirstArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuralUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserFindFirstOrThrowArgs} args - Arguments to find a MuralUser
     * @example
     * // Get one MuralUser
     * const muralUser = await prisma.muralUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuralUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MuralUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MuralUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MuralUsers
     * const muralUsers = await prisma.muralUser.findMany()
     * 
     * // Get first 10 MuralUsers
     * const muralUsers = await prisma.muralUser.findMany({ take: 10 })
     * 
     * // Only select the `muralId`
     * const muralUserWithMuralIdOnly = await prisma.muralUser.findMany({ select: { muralId: true } })
     * 
     */
    findMany<T extends MuralUserFindManyArgs>(args?: SelectSubset<T, MuralUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MuralUser.
     * @param {MuralUserCreateArgs} args - Arguments to create a MuralUser.
     * @example
     * // Create one MuralUser
     * const MuralUser = await prisma.muralUser.create({
     *   data: {
     *     // ... data to create a MuralUser
     *   }
     * })
     * 
     */
    create<T extends MuralUserCreateArgs>(args: SelectSubset<T, MuralUserCreateArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MuralUsers.
     * @param {MuralUserCreateManyArgs} args - Arguments to create many MuralUsers.
     * @example
     * // Create many MuralUsers
     * const muralUser = await prisma.muralUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuralUserCreateManyArgs>(args?: SelectSubset<T, MuralUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MuralUsers and returns the data saved in the database.
     * @param {MuralUserCreateManyAndReturnArgs} args - Arguments to create many MuralUsers.
     * @example
     * // Create many MuralUsers
     * const muralUser = await prisma.muralUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MuralUsers and only return the `muralId`
     * const muralUserWithMuralIdOnly = await prisma.muralUser.createManyAndReturn({
     *   select: { muralId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuralUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MuralUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MuralUser.
     * @param {MuralUserDeleteArgs} args - Arguments to delete one MuralUser.
     * @example
     * // Delete one MuralUser
     * const MuralUser = await prisma.muralUser.delete({
     *   where: {
     *     // ... filter to delete one MuralUser
     *   }
     * })
     * 
     */
    delete<T extends MuralUserDeleteArgs>(args: SelectSubset<T, MuralUserDeleteArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MuralUser.
     * @param {MuralUserUpdateArgs} args - Arguments to update one MuralUser.
     * @example
     * // Update one MuralUser
     * const muralUser = await prisma.muralUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuralUserUpdateArgs>(args: SelectSubset<T, MuralUserUpdateArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MuralUsers.
     * @param {MuralUserDeleteManyArgs} args - Arguments to filter MuralUsers to delete.
     * @example
     * // Delete a few MuralUsers
     * const { count } = await prisma.muralUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuralUserDeleteManyArgs>(args?: SelectSubset<T, MuralUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuralUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MuralUsers
     * const muralUser = await prisma.muralUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuralUserUpdateManyArgs>(args: SelectSubset<T, MuralUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuralUsers and returns the data updated in the database.
     * @param {MuralUserUpdateManyAndReturnArgs} args - Arguments to update many MuralUsers.
     * @example
     * // Update many MuralUsers
     * const muralUser = await prisma.muralUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MuralUsers and only return the `muralId`
     * const muralUserWithMuralIdOnly = await prisma.muralUser.updateManyAndReturn({
     *   select: { muralId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MuralUserUpdateManyAndReturnArgs>(args: SelectSubset<T, MuralUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MuralUser.
     * @param {MuralUserUpsertArgs} args - Arguments to update or create a MuralUser.
     * @example
     * // Update or create a MuralUser
     * const muralUser = await prisma.muralUser.upsert({
     *   create: {
     *     // ... data to create a MuralUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MuralUser we want to update
     *   }
     * })
     */
    upsert<T extends MuralUserUpsertArgs>(args: SelectSubset<T, MuralUserUpsertArgs<ExtArgs>>): Prisma__MuralUserClient<$Result.GetResult<Prisma.$MuralUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MuralUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserCountArgs} args - Arguments to filter MuralUsers to count.
     * @example
     * // Count the number of MuralUsers
     * const count = await prisma.muralUser.count({
     *   where: {
     *     // ... the filter for the MuralUsers we want to count
     *   }
     * })
    **/
    count<T extends MuralUserCountArgs>(
      args?: Subset<T, MuralUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuralUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MuralUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuralUserAggregateArgs>(args: Subset<T, MuralUserAggregateArgs>): Prisma.PrismaPromise<GetMuralUserAggregateType<T>>

    /**
     * Group by MuralUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuralUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MuralUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuralUserGroupByArgs['orderBy'] }
        : { orderBy?: MuralUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MuralUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuralUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MuralUser model
   */
  readonly fields: MuralUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MuralUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuralUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mural<T extends MuralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuralDefaultArgs<ExtArgs>>): Prisma__MuralClient<$Result.GetResult<Prisma.$MuralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MuralUser model
   */
  interface MuralUserFieldRefs {
    readonly muralId: FieldRef<"MuralUser", 'String'>
    readonly userId: FieldRef<"MuralUser", 'String'>
    readonly createdAt: FieldRef<"MuralUser", 'DateTime'>
    readonly updatedAt: FieldRef<"MuralUser", 'DateTime'>
    readonly deletedAt: FieldRef<"MuralUser", 'DateTime'>
    readonly role: FieldRef<"MuralUser", 'MuralUserRole'>
  }
    

  // Custom InputTypes
  /**
   * MuralUser findUnique
   */
  export type MuralUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter, which MuralUser to fetch.
     */
    where: MuralUserWhereUniqueInput
  }

  /**
   * MuralUser findUniqueOrThrow
   */
  export type MuralUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter, which MuralUser to fetch.
     */
    where: MuralUserWhereUniqueInput
  }

  /**
   * MuralUser findFirst
   */
  export type MuralUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter, which MuralUser to fetch.
     */
    where?: MuralUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuralUsers to fetch.
     */
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuralUsers.
     */
    cursor?: MuralUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuralUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuralUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuralUsers.
     */
    distinct?: MuralUserScalarFieldEnum | MuralUserScalarFieldEnum[]
  }

  /**
   * MuralUser findFirstOrThrow
   */
  export type MuralUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter, which MuralUser to fetch.
     */
    where?: MuralUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuralUsers to fetch.
     */
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuralUsers.
     */
    cursor?: MuralUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuralUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuralUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuralUsers.
     */
    distinct?: MuralUserScalarFieldEnum | MuralUserScalarFieldEnum[]
  }

  /**
   * MuralUser findMany
   */
  export type MuralUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter, which MuralUsers to fetch.
     */
    where?: MuralUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuralUsers to fetch.
     */
    orderBy?: MuralUserOrderByWithRelationInput | MuralUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MuralUsers.
     */
    cursor?: MuralUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuralUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuralUsers.
     */
    skip?: number
    distinct?: MuralUserScalarFieldEnum | MuralUserScalarFieldEnum[]
  }

  /**
   * MuralUser create
   */
  export type MuralUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MuralUser.
     */
    data: XOR<MuralUserCreateInput, MuralUserUncheckedCreateInput>
  }

  /**
   * MuralUser createMany
   */
  export type MuralUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MuralUsers.
     */
    data: MuralUserCreateManyInput | MuralUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuralUser createManyAndReturn
   */
  export type MuralUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * The data used to create many MuralUsers.
     */
    data: MuralUserCreateManyInput | MuralUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MuralUser update
   */
  export type MuralUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MuralUser.
     */
    data: XOR<MuralUserUpdateInput, MuralUserUncheckedUpdateInput>
    /**
     * Choose, which MuralUser to update.
     */
    where: MuralUserWhereUniqueInput
  }

  /**
   * MuralUser updateMany
   */
  export type MuralUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MuralUsers.
     */
    data: XOR<MuralUserUpdateManyMutationInput, MuralUserUncheckedUpdateManyInput>
    /**
     * Filter which MuralUsers to update
     */
    where?: MuralUserWhereInput
    /**
     * Limit how many MuralUsers to update.
     */
    limit?: number
  }

  /**
   * MuralUser updateManyAndReturn
   */
  export type MuralUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * The data used to update MuralUsers.
     */
    data: XOR<MuralUserUpdateManyMutationInput, MuralUserUncheckedUpdateManyInput>
    /**
     * Filter which MuralUsers to update
     */
    where?: MuralUserWhereInput
    /**
     * Limit how many MuralUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MuralUser upsert
   */
  export type MuralUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MuralUser to update in case it exists.
     */
    where: MuralUserWhereUniqueInput
    /**
     * In case the MuralUser found by the `where` argument doesn't exist, create a new MuralUser with this data.
     */
    create: XOR<MuralUserCreateInput, MuralUserUncheckedCreateInput>
    /**
     * In case the MuralUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuralUserUpdateInput, MuralUserUncheckedUpdateInput>
  }

  /**
   * MuralUser delete
   */
  export type MuralUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
    /**
     * Filter which MuralUser to delete.
     */
    where: MuralUserWhereUniqueInput
  }

  /**
   * MuralUser deleteMany
   */
  export type MuralUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuralUsers to delete
     */
    where?: MuralUserWhereInput
    /**
     * Limit how many MuralUsers to delete.
     */
    limit?: number
  }

  /**
   * MuralUser without action
   */
  export type MuralUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuralUser
     */
    select?: MuralUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuralUser
     */
    omit?: MuralUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuralUserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    companyId: string
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    workspaces?: boolean | Group$workspacesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    workspaces?: boolean | Group$workspacesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      users: Prisma.$GroupUserPayload<ExtArgs>[]
      workspaces: Prisma.$GroupWorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends Group$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, Group$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly companyId: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
    readonly deletedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    where?: GroupUserWhereInput
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    cursor?: GroupUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupUserScalarFieldEnum | GroupUserScalarFieldEnum[]
  }

  /**
   * Group.workspaces
   */
  export type Group$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    where?: GroupWorkspaceWhereInput
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    cursor?: GroupWorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupWorkspaceScalarFieldEnum | GroupWorkspaceScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupUser
   */

  export type AggregateGroupUser = {
    _count: GroupUserCountAggregateOutputType | null
    _min: GroupUserMinAggregateOutputType | null
    _max: GroupUserMaxAggregateOutputType | null
  }

  export type GroupUserMinAggregateOutputType = {
    userId: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupUserMaxAggregateOutputType = {
    userId: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GroupUserCountAggregateOutputType = {
    userId: number
    groupId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GroupUserMinAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupUserMaxAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GroupUserCountAggregateInputType = {
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GroupUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupUser to aggregate.
     */
    where?: GroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupUsers to fetch.
     */
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupUsers
    **/
    _count?: true | GroupUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupUserMaxAggregateInputType
  }

  export type GetGroupUserAggregateType<T extends GroupUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupUser[P]>
      : GetScalarType<T[P], AggregateGroupUser[P]>
  }




  export type GroupUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupUserWhereInput
    orderBy?: GroupUserOrderByWithAggregationInput | GroupUserOrderByWithAggregationInput[]
    by: GroupUserScalarFieldEnum[] | GroupUserScalarFieldEnum
    having?: GroupUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupUserCountAggregateInputType | true
    _min?: GroupUserMinAggregateInputType
    _max?: GroupUserMaxAggregateInputType
  }

  export type GroupUserGroupByOutputType = {
    userId: string
    groupId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GroupUserCountAggregateOutputType | null
    _min: GroupUserMinAggregateOutputType | null
    _max: GroupUserMaxAggregateOutputType | null
  }

  type GetGroupUserGroupByPayload<T extends GroupUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupUserGroupByOutputType[P]>
            : GetScalarType<T[P], GroupUserGroupByOutputType[P]>
        }
      >
    >


  export type GroupUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupUser"]>

  export type GroupUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupUser"]>

  export type GroupUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupUser"]>

  export type GroupUserSelectScalar = {
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GroupUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "groupId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["groupUser"]>
  export type GroupUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      groupId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["groupUser"]>
    composites: {}
  }

  type GroupUserGetPayload<S extends boolean | null | undefined | GroupUserDefaultArgs> = $Result.GetResult<Prisma.$GroupUserPayload, S>

  type GroupUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupUserCountAggregateInputType | true
    }

  export interface GroupUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupUser'], meta: { name: 'GroupUser' } }
    /**
     * Find zero or one GroupUser that matches the filter.
     * @param {GroupUserFindUniqueArgs} args - Arguments to find a GroupUser
     * @example
     * // Get one GroupUser
     * const groupUser = await prisma.groupUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupUserFindUniqueArgs>(args: SelectSubset<T, GroupUserFindUniqueArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupUserFindUniqueOrThrowArgs} args - Arguments to find a GroupUser
     * @example
     * // Get one GroupUser
     * const groupUser = await prisma.groupUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserFindFirstArgs} args - Arguments to find a GroupUser
     * @example
     * // Get one GroupUser
     * const groupUser = await prisma.groupUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupUserFindFirstArgs>(args?: SelectSubset<T, GroupUserFindFirstArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserFindFirstOrThrowArgs} args - Arguments to find a GroupUser
     * @example
     * // Get one GroupUser
     * const groupUser = await prisma.groupUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupUsers
     * const groupUsers = await prisma.groupUser.findMany()
     * 
     * // Get first 10 GroupUsers
     * const groupUsers = await prisma.groupUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const groupUserWithUserIdOnly = await prisma.groupUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends GroupUserFindManyArgs>(args?: SelectSubset<T, GroupUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupUser.
     * @param {GroupUserCreateArgs} args - Arguments to create a GroupUser.
     * @example
     * // Create one GroupUser
     * const GroupUser = await prisma.groupUser.create({
     *   data: {
     *     // ... data to create a GroupUser
     *   }
     * })
     * 
     */
    create<T extends GroupUserCreateArgs>(args: SelectSubset<T, GroupUserCreateArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupUsers.
     * @param {GroupUserCreateManyArgs} args - Arguments to create many GroupUsers.
     * @example
     * // Create many GroupUsers
     * const groupUser = await prisma.groupUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupUserCreateManyArgs>(args?: SelectSubset<T, GroupUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupUsers and returns the data saved in the database.
     * @param {GroupUserCreateManyAndReturnArgs} args - Arguments to create many GroupUsers.
     * @example
     * // Create many GroupUsers
     * const groupUser = await prisma.groupUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupUsers and only return the `userId`
     * const groupUserWithUserIdOnly = await prisma.groupUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupUser.
     * @param {GroupUserDeleteArgs} args - Arguments to delete one GroupUser.
     * @example
     * // Delete one GroupUser
     * const GroupUser = await prisma.groupUser.delete({
     *   where: {
     *     // ... filter to delete one GroupUser
     *   }
     * })
     * 
     */
    delete<T extends GroupUserDeleteArgs>(args: SelectSubset<T, GroupUserDeleteArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupUser.
     * @param {GroupUserUpdateArgs} args - Arguments to update one GroupUser.
     * @example
     * // Update one GroupUser
     * const groupUser = await prisma.groupUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUserUpdateArgs>(args: SelectSubset<T, GroupUserUpdateArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupUsers.
     * @param {GroupUserDeleteManyArgs} args - Arguments to filter GroupUsers to delete.
     * @example
     * // Delete a few GroupUsers
     * const { count } = await prisma.groupUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupUserDeleteManyArgs>(args?: SelectSubset<T, GroupUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupUsers
     * const groupUser = await prisma.groupUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUserUpdateManyArgs>(args: SelectSubset<T, GroupUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupUsers and returns the data updated in the database.
     * @param {GroupUserUpdateManyAndReturnArgs} args - Arguments to update many GroupUsers.
     * @example
     * // Update many GroupUsers
     * const groupUser = await prisma.groupUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupUsers and only return the `userId`
     * const groupUserWithUserIdOnly = await prisma.groupUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupUser.
     * @param {GroupUserUpsertArgs} args - Arguments to update or create a GroupUser.
     * @example
     * // Update or create a GroupUser
     * const groupUser = await prisma.groupUser.upsert({
     *   create: {
     *     // ... data to create a GroupUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupUser we want to update
     *   }
     * })
     */
    upsert<T extends GroupUserUpsertArgs>(args: SelectSubset<T, GroupUserUpsertArgs<ExtArgs>>): Prisma__GroupUserClient<$Result.GetResult<Prisma.$GroupUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserCountArgs} args - Arguments to filter GroupUsers to count.
     * @example
     * // Count the number of GroupUsers
     * const count = await prisma.groupUser.count({
     *   where: {
     *     // ... the filter for the GroupUsers we want to count
     *   }
     * })
    **/
    count<T extends GroupUserCountArgs>(
      args?: Subset<T, GroupUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupUserAggregateArgs>(args: Subset<T, GroupUserAggregateArgs>): Prisma.PrismaPromise<GetGroupUserAggregateType<T>>

    /**
     * Group by GroupUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupUserGroupByArgs['orderBy'] }
        : { orderBy?: GroupUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupUser model
   */
  readonly fields: GroupUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupUser model
   */
  interface GroupUserFieldRefs {
    readonly userId: FieldRef<"GroupUser", 'String'>
    readonly groupId: FieldRef<"GroupUser", 'String'>
    readonly createdAt: FieldRef<"GroupUser", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupUser", 'DateTime'>
    readonly deletedAt: FieldRef<"GroupUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupUser findUnique
   */
  export type GroupUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter, which GroupUser to fetch.
     */
    where: GroupUserWhereUniqueInput
  }

  /**
   * GroupUser findUniqueOrThrow
   */
  export type GroupUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter, which GroupUser to fetch.
     */
    where: GroupUserWhereUniqueInput
  }

  /**
   * GroupUser findFirst
   */
  export type GroupUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter, which GroupUser to fetch.
     */
    where?: GroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupUsers to fetch.
     */
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupUsers.
     */
    cursor?: GroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupUsers.
     */
    distinct?: GroupUserScalarFieldEnum | GroupUserScalarFieldEnum[]
  }

  /**
   * GroupUser findFirstOrThrow
   */
  export type GroupUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter, which GroupUser to fetch.
     */
    where?: GroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupUsers to fetch.
     */
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupUsers.
     */
    cursor?: GroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupUsers.
     */
    distinct?: GroupUserScalarFieldEnum | GroupUserScalarFieldEnum[]
  }

  /**
   * GroupUser findMany
   */
  export type GroupUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter, which GroupUsers to fetch.
     */
    where?: GroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupUsers to fetch.
     */
    orderBy?: GroupUserOrderByWithRelationInput | GroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupUsers.
     */
    cursor?: GroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupUsers.
     */
    skip?: number
    distinct?: GroupUserScalarFieldEnum | GroupUserScalarFieldEnum[]
  }

  /**
   * GroupUser create
   */
  export type GroupUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupUser.
     */
    data: XOR<GroupUserCreateInput, GroupUserUncheckedCreateInput>
  }

  /**
   * GroupUser createMany
   */
  export type GroupUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupUsers.
     */
    data: GroupUserCreateManyInput | GroupUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupUser createManyAndReturn
   */
  export type GroupUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * The data used to create many GroupUsers.
     */
    data: GroupUserCreateManyInput | GroupUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupUser update
   */
  export type GroupUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupUser.
     */
    data: XOR<GroupUserUpdateInput, GroupUserUncheckedUpdateInput>
    /**
     * Choose, which GroupUser to update.
     */
    where: GroupUserWhereUniqueInput
  }

  /**
   * GroupUser updateMany
   */
  export type GroupUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupUsers.
     */
    data: XOR<GroupUserUpdateManyMutationInput, GroupUserUncheckedUpdateManyInput>
    /**
     * Filter which GroupUsers to update
     */
    where?: GroupUserWhereInput
    /**
     * Limit how many GroupUsers to update.
     */
    limit?: number
  }

  /**
   * GroupUser updateManyAndReturn
   */
  export type GroupUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * The data used to update GroupUsers.
     */
    data: XOR<GroupUserUpdateManyMutationInput, GroupUserUncheckedUpdateManyInput>
    /**
     * Filter which GroupUsers to update
     */
    where?: GroupUserWhereInput
    /**
     * Limit how many GroupUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupUser upsert
   */
  export type GroupUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupUser to update in case it exists.
     */
    where: GroupUserWhereUniqueInput
    /**
     * In case the GroupUser found by the `where` argument doesn't exist, create a new GroupUser with this data.
     */
    create: XOR<GroupUserCreateInput, GroupUserUncheckedCreateInput>
    /**
     * In case the GroupUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUserUpdateInput, GroupUserUncheckedUpdateInput>
  }

  /**
   * GroupUser delete
   */
  export type GroupUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
    /**
     * Filter which GroupUser to delete.
     */
    where: GroupUserWhereUniqueInput
  }

  /**
   * GroupUser deleteMany
   */
  export type GroupUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupUsers to delete
     */
    where?: GroupUserWhereInput
    /**
     * Limit how many GroupUsers to delete.
     */
    limit?: number
  }

  /**
   * GroupUser without action
   */
  export type GroupUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupUser
     */
    select?: GroupUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupUser
     */
    omit?: GroupUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupUserInclude<ExtArgs> | null
  }


  /**
   * Model GroupWorkspace
   */

  export type AggregateGroupWorkspace = {
    _count: GroupWorkspaceCountAggregateOutputType | null
    _min: GroupWorkspaceMinAggregateOutputType | null
    _max: GroupWorkspaceMaxAggregateOutputType | null
  }

  export type GroupWorkspaceMinAggregateOutputType = {
    groupId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.GroupWorkspaceRole | null
  }

  export type GroupWorkspaceMaxAggregateOutputType = {
    groupId: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.GroupWorkspaceRole | null
  }

  export type GroupWorkspaceCountAggregateOutputType = {
    groupId: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type GroupWorkspaceMinAggregateInputType = {
    groupId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type GroupWorkspaceMaxAggregateInputType = {
    groupId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type GroupWorkspaceCountAggregateInputType = {
    groupId?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type GroupWorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupWorkspace to aggregate.
     */
    where?: GroupWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupWorkspaces to fetch.
     */
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupWorkspaces
    **/
    _count?: true | GroupWorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupWorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupWorkspaceMaxAggregateInputType
  }

  export type GetGroupWorkspaceAggregateType<T extends GroupWorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupWorkspace[P]>
      : GetScalarType<T[P], AggregateGroupWorkspace[P]>
  }




  export type GroupWorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWorkspaceWhereInput
    orderBy?: GroupWorkspaceOrderByWithAggregationInput | GroupWorkspaceOrderByWithAggregationInput[]
    by: GroupWorkspaceScalarFieldEnum[] | GroupWorkspaceScalarFieldEnum
    having?: GroupWorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupWorkspaceCountAggregateInputType | true
    _min?: GroupWorkspaceMinAggregateInputType
    _max?: GroupWorkspaceMaxAggregateInputType
  }

  export type GroupWorkspaceGroupByOutputType = {
    groupId: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    role: $Enums.GroupWorkspaceRole
    _count: GroupWorkspaceCountAggregateOutputType | null
    _min: GroupWorkspaceMinAggregateOutputType | null
    _max: GroupWorkspaceMaxAggregateOutputType | null
  }

  type GetGroupWorkspaceGroupByPayload<T extends GroupWorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupWorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupWorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupWorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], GroupWorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type GroupWorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupWorkspace"]>

  export type GroupWorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupWorkspace"]>

  export type GroupWorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupWorkspace"]>

  export type GroupWorkspaceSelectScalar = {
    groupId?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type GroupWorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "workspaceId" | "createdAt" | "updatedAt" | "deletedAt" | "role", ExtArgs["result"]["groupWorkspace"]>
  export type GroupWorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GroupWorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GroupWorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $GroupWorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupWorkspace"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      role: $Enums.GroupWorkspaceRole
    }, ExtArgs["result"]["groupWorkspace"]>
    composites: {}
  }

  type GroupWorkspaceGetPayload<S extends boolean | null | undefined | GroupWorkspaceDefaultArgs> = $Result.GetResult<Prisma.$GroupWorkspacePayload, S>

  type GroupWorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupWorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupWorkspaceCountAggregateInputType | true
    }

  export interface GroupWorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupWorkspace'], meta: { name: 'GroupWorkspace' } }
    /**
     * Find zero or one GroupWorkspace that matches the filter.
     * @param {GroupWorkspaceFindUniqueArgs} args - Arguments to find a GroupWorkspace
     * @example
     * // Get one GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupWorkspaceFindUniqueArgs>(args: SelectSubset<T, GroupWorkspaceFindUniqueArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupWorkspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupWorkspaceFindUniqueOrThrowArgs} args - Arguments to find a GroupWorkspace
     * @example
     * // Get one GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupWorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupWorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupWorkspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceFindFirstArgs} args - Arguments to find a GroupWorkspace
     * @example
     * // Get one GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupWorkspaceFindFirstArgs>(args?: SelectSubset<T, GroupWorkspaceFindFirstArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupWorkspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceFindFirstOrThrowArgs} args - Arguments to find a GroupWorkspace
     * @example
     * // Get one GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupWorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupWorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupWorkspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupWorkspaces
     * const groupWorkspaces = await prisma.groupWorkspace.findMany()
     * 
     * // Get first 10 GroupWorkspaces
     * const groupWorkspaces = await prisma.groupWorkspace.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupWorkspaceWithGroupIdOnly = await prisma.groupWorkspace.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupWorkspaceFindManyArgs>(args?: SelectSubset<T, GroupWorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupWorkspace.
     * @param {GroupWorkspaceCreateArgs} args - Arguments to create a GroupWorkspace.
     * @example
     * // Create one GroupWorkspace
     * const GroupWorkspace = await prisma.groupWorkspace.create({
     *   data: {
     *     // ... data to create a GroupWorkspace
     *   }
     * })
     * 
     */
    create<T extends GroupWorkspaceCreateArgs>(args: SelectSubset<T, GroupWorkspaceCreateArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupWorkspaces.
     * @param {GroupWorkspaceCreateManyArgs} args - Arguments to create many GroupWorkspaces.
     * @example
     * // Create many GroupWorkspaces
     * const groupWorkspace = await prisma.groupWorkspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupWorkspaceCreateManyArgs>(args?: SelectSubset<T, GroupWorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupWorkspaces and returns the data saved in the database.
     * @param {GroupWorkspaceCreateManyAndReturnArgs} args - Arguments to create many GroupWorkspaces.
     * @example
     * // Create many GroupWorkspaces
     * const groupWorkspace = await prisma.groupWorkspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupWorkspaces and only return the `groupId`
     * const groupWorkspaceWithGroupIdOnly = await prisma.groupWorkspace.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupWorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupWorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupWorkspace.
     * @param {GroupWorkspaceDeleteArgs} args - Arguments to delete one GroupWorkspace.
     * @example
     * // Delete one GroupWorkspace
     * const GroupWorkspace = await prisma.groupWorkspace.delete({
     *   where: {
     *     // ... filter to delete one GroupWorkspace
     *   }
     * })
     * 
     */
    delete<T extends GroupWorkspaceDeleteArgs>(args: SelectSubset<T, GroupWorkspaceDeleteArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupWorkspace.
     * @param {GroupWorkspaceUpdateArgs} args - Arguments to update one GroupWorkspace.
     * @example
     * // Update one GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupWorkspaceUpdateArgs>(args: SelectSubset<T, GroupWorkspaceUpdateArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupWorkspaces.
     * @param {GroupWorkspaceDeleteManyArgs} args - Arguments to filter GroupWorkspaces to delete.
     * @example
     * // Delete a few GroupWorkspaces
     * const { count } = await prisma.groupWorkspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupWorkspaceDeleteManyArgs>(args?: SelectSubset<T, GroupWorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupWorkspaces
     * const groupWorkspace = await prisma.groupWorkspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupWorkspaceUpdateManyArgs>(args: SelectSubset<T, GroupWorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupWorkspaces and returns the data updated in the database.
     * @param {GroupWorkspaceUpdateManyAndReturnArgs} args - Arguments to update many GroupWorkspaces.
     * @example
     * // Update many GroupWorkspaces
     * const groupWorkspace = await prisma.groupWorkspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupWorkspaces and only return the `groupId`
     * const groupWorkspaceWithGroupIdOnly = await prisma.groupWorkspace.updateManyAndReturn({
     *   select: { groupId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupWorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupWorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupWorkspace.
     * @param {GroupWorkspaceUpsertArgs} args - Arguments to update or create a GroupWorkspace.
     * @example
     * // Update or create a GroupWorkspace
     * const groupWorkspace = await prisma.groupWorkspace.upsert({
     *   create: {
     *     // ... data to create a GroupWorkspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupWorkspace we want to update
     *   }
     * })
     */
    upsert<T extends GroupWorkspaceUpsertArgs>(args: SelectSubset<T, GroupWorkspaceUpsertArgs<ExtArgs>>): Prisma__GroupWorkspaceClient<$Result.GetResult<Prisma.$GroupWorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceCountArgs} args - Arguments to filter GroupWorkspaces to count.
     * @example
     * // Count the number of GroupWorkspaces
     * const count = await prisma.groupWorkspace.count({
     *   where: {
     *     // ... the filter for the GroupWorkspaces we want to count
     *   }
     * })
    **/
    count<T extends GroupWorkspaceCountArgs>(
      args?: Subset<T, GroupWorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupWorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupWorkspaceAggregateArgs>(args: Subset<T, GroupWorkspaceAggregateArgs>): Prisma.PrismaPromise<GetGroupWorkspaceAggregateType<T>>

    /**
     * Group by GroupWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupWorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupWorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupWorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: GroupWorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupWorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupWorkspace model
   */
  readonly fields: GroupWorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupWorkspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupWorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupWorkspace model
   */
  interface GroupWorkspaceFieldRefs {
    readonly groupId: FieldRef<"GroupWorkspace", 'String'>
    readonly workspaceId: FieldRef<"GroupWorkspace", 'String'>
    readonly createdAt: FieldRef<"GroupWorkspace", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupWorkspace", 'DateTime'>
    readonly deletedAt: FieldRef<"GroupWorkspace", 'DateTime'>
    readonly role: FieldRef<"GroupWorkspace", 'GroupWorkspaceRole'>
  }
    

  // Custom InputTypes
  /**
   * GroupWorkspace findUnique
   */
  export type GroupWorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which GroupWorkspace to fetch.
     */
    where: GroupWorkspaceWhereUniqueInput
  }

  /**
   * GroupWorkspace findUniqueOrThrow
   */
  export type GroupWorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which GroupWorkspace to fetch.
     */
    where: GroupWorkspaceWhereUniqueInput
  }

  /**
   * GroupWorkspace findFirst
   */
  export type GroupWorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which GroupWorkspace to fetch.
     */
    where?: GroupWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupWorkspaces to fetch.
     */
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupWorkspaces.
     */
    cursor?: GroupWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupWorkspaces.
     */
    distinct?: GroupWorkspaceScalarFieldEnum | GroupWorkspaceScalarFieldEnum[]
  }

  /**
   * GroupWorkspace findFirstOrThrow
   */
  export type GroupWorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which GroupWorkspace to fetch.
     */
    where?: GroupWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupWorkspaces to fetch.
     */
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupWorkspaces.
     */
    cursor?: GroupWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupWorkspaces.
     */
    distinct?: GroupWorkspaceScalarFieldEnum | GroupWorkspaceScalarFieldEnum[]
  }

  /**
   * GroupWorkspace findMany
   */
  export type GroupWorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which GroupWorkspaces to fetch.
     */
    where?: GroupWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupWorkspaces to fetch.
     */
    orderBy?: GroupWorkspaceOrderByWithRelationInput | GroupWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupWorkspaces.
     */
    cursor?: GroupWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupWorkspaces.
     */
    skip?: number
    distinct?: GroupWorkspaceScalarFieldEnum | GroupWorkspaceScalarFieldEnum[]
  }

  /**
   * GroupWorkspace create
   */
  export type GroupWorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupWorkspace.
     */
    data: XOR<GroupWorkspaceCreateInput, GroupWorkspaceUncheckedCreateInput>
  }

  /**
   * GroupWorkspace createMany
   */
  export type GroupWorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupWorkspaces.
     */
    data: GroupWorkspaceCreateManyInput | GroupWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupWorkspace createManyAndReturn
   */
  export type GroupWorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many GroupWorkspaces.
     */
    data: GroupWorkspaceCreateManyInput | GroupWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupWorkspace update
   */
  export type GroupWorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupWorkspace.
     */
    data: XOR<GroupWorkspaceUpdateInput, GroupWorkspaceUncheckedUpdateInput>
    /**
     * Choose, which GroupWorkspace to update.
     */
    where: GroupWorkspaceWhereUniqueInput
  }

  /**
   * GroupWorkspace updateMany
   */
  export type GroupWorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupWorkspaces.
     */
    data: XOR<GroupWorkspaceUpdateManyMutationInput, GroupWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which GroupWorkspaces to update
     */
    where?: GroupWorkspaceWhereInput
    /**
     * Limit how many GroupWorkspaces to update.
     */
    limit?: number
  }

  /**
   * GroupWorkspace updateManyAndReturn
   */
  export type GroupWorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update GroupWorkspaces.
     */
    data: XOR<GroupWorkspaceUpdateManyMutationInput, GroupWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which GroupWorkspaces to update
     */
    where?: GroupWorkspaceWhereInput
    /**
     * Limit how many GroupWorkspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupWorkspace upsert
   */
  export type GroupWorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupWorkspace to update in case it exists.
     */
    where: GroupWorkspaceWhereUniqueInput
    /**
     * In case the GroupWorkspace found by the `where` argument doesn't exist, create a new GroupWorkspace with this data.
     */
    create: XOR<GroupWorkspaceCreateInput, GroupWorkspaceUncheckedCreateInput>
    /**
     * In case the GroupWorkspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupWorkspaceUpdateInput, GroupWorkspaceUncheckedUpdateInput>
  }

  /**
   * GroupWorkspace delete
   */
  export type GroupWorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
    /**
     * Filter which GroupWorkspace to delete.
     */
    where: GroupWorkspaceWhereUniqueInput
  }

  /**
   * GroupWorkspace deleteMany
   */
  export type GroupWorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupWorkspaces to delete
     */
    where?: GroupWorkspaceWhereInput
    /**
     * Limit how many GroupWorkspaces to delete.
     */
    limit?: number
  }

  /**
   * GroupWorkspace without action
   */
  export type GroupWorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupWorkspace
     */
    select?: GroupWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupWorkspace
     */
    omit?: GroupWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupWorkspaceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    companyId: 'companyId',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceUserScalarFieldEnum: {
    userId: 'userId',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    role: 'role'
  };

  export type WorkspaceUserScalarFieldEnum = (typeof WorkspaceUserScalarFieldEnum)[keyof typeof WorkspaceUserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    workspaceId: 'workspaceId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomUserScalarFieldEnum: {
    roomId: 'roomId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    role: 'role'
  };

  export type RoomUserScalarFieldEnum = (typeof RoomUserScalarFieldEnum)[keyof typeof RoomUserScalarFieldEnum]


  export const MuralScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    roomId: 'roomId'
  };

  export type MuralScalarFieldEnum = (typeof MuralScalarFieldEnum)[keyof typeof MuralScalarFieldEnum]


  export const MuralUserScalarFieldEnum: {
    muralId: 'muralId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    role: 'role'
  };

  export type MuralUserScalarFieldEnum = (typeof MuralUserScalarFieldEnum)[keyof typeof MuralUserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupUserScalarFieldEnum: {
    userId: 'userId',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GroupUserScalarFieldEnum = (typeof GroupUserScalarFieldEnum)[keyof typeof GroupUserScalarFieldEnum]


  export const GroupWorkspaceScalarFieldEnum: {
    groupId: 'groupId',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    role: 'role'
  };

  export type GroupWorkspaceScalarFieldEnum = (typeof GroupWorkspaceScalarFieldEnum)[keyof typeof GroupWorkspaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WorkspaceUserRole'
   */
  export type EnumWorkspaceUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceUserRole'>
    


  /**
   * Reference to a field of type 'WorkspaceUserRole[]'
   */
  export type ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceUserRole[]'>
    


  /**
   * Reference to a field of type 'RoomUserRole'
   */
  export type EnumRoomUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomUserRole'>
    


  /**
   * Reference to a field of type 'RoomUserRole[]'
   */
  export type ListEnumRoomUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomUserRole[]'>
    


  /**
   * Reference to a field of type 'MuralUserRole'
   */
  export type EnumMuralUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MuralUserRole'>
    


  /**
   * Reference to a field of type 'MuralUserRole[]'
   */
  export type ListEnumMuralUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MuralUserRole[]'>
    


  /**
   * Reference to a field of type 'GroupWorkspaceRole'
   */
  export type EnumGroupWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupWorkspaceRole'>
    


  /**
   * Reference to a field of type 'GroupWorkspaceRole[]'
   */
  export type ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupWorkspaceRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    companyId?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    workspaces?: WorkspaceUserListRelationFilter
    rooms?: RoomUserListRelationFilter
    murals?: MuralUserListRelationFilter
    groups?: GroupUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    companyId?: SortOrderInput | SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    workspaces?: WorkspaceUserOrderByRelationAggregateInput
    rooms?: RoomUserOrderByRelationAggregateInput
    murals?: MuralUserOrderByRelationAggregateInput
    groups?: GroupUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    companyId?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    workspaces?: WorkspaceUserListRelationFilter
    rooms?: RoomUserListRelationFilter
    murals?: MuralUserListRelationFilter
    groups?: GroupUserListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    companyId?: SortOrderInput | SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    companyId?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    workspaces?: WorkspaceListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    workspaces?: WorkspaceOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    workspaces?: WorkspaceListRelationFilter
    groups?: GroupListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    companyId?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    users?: WorkspaceUserListRelationFilter
    rooms?: RoomListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    groups?: GroupWorkspaceListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: WorkspaceUserOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    groups?: GroupWorkspaceOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    companyId?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    users?: WorkspaceUserListRelationFilter
    rooms?: RoomListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    groups?: GroupWorkspaceListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    companyId?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
  }

  export type WorkspaceUserWhereInput = {
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    updatedAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"WorkspaceUser"> | Date | string | null
    role?: EnumWorkspaceUserRoleFilter<"WorkspaceUser"> | $Enums.WorkspaceUserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type WorkspaceUserOrderByWithRelationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WorkspaceUserWhereUniqueInput = Prisma.AtLeast<{
    workspaceId_userId?: WorkspaceUserWorkspaceIdUserIdCompoundUniqueInput
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    updatedAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"WorkspaceUser"> | Date | string | null
    role?: EnumWorkspaceUserRoleFilter<"WorkspaceUser"> | $Enums.WorkspaceUserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "workspaceId_userId">

  export type WorkspaceUserOrderByWithAggregationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: WorkspaceUserCountOrderByAggregateInput
    _max?: WorkspaceUserMaxOrderByAggregateInput
    _min?: WorkspaceUserMinOrderByAggregateInput
  }

  export type WorkspaceUserScalarWhereWithAggregatesInput = {
    AND?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    OR?: WorkspaceUserScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkspaceUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkspaceUser"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"WorkspaceUser"> | Date | string | null
    role?: EnumWorkspaceUserRoleWithAggregatesFilter<"WorkspaceUser"> | $Enums.WorkspaceUserRole
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    workspaceId?: StringFilter<"Room"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    users?: RoomUserListRelationFilter
    murals?: MuralListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    users?: RoomUserOrderByRelationAggregateInput
    murals?: MuralOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    workspaceId?: StringFilter<"Room"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    users?: RoomUserListRelationFilter
    murals?: MuralListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    workspaceId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type RoomUserWhereInput = {
    AND?: RoomUserWhereInput | RoomUserWhereInput[]
    OR?: RoomUserWhereInput[]
    NOT?: RoomUserWhereInput | RoomUserWhereInput[]
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    createdAt?: DateTimeFilter<"RoomUser"> | Date | string
    updatedAt?: DateTimeFilter<"RoomUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomUser"> | Date | string | null
    role?: EnumRoomUserRoleFilter<"RoomUser"> | $Enums.RoomUserRole
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomUserOrderByWithRelationInput = {
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomUserWhereUniqueInput = Prisma.AtLeast<{
    roomId_userId?: RoomUserRoomIdUserIdCompoundUniqueInput
    AND?: RoomUserWhereInput | RoomUserWhereInput[]
    OR?: RoomUserWhereInput[]
    NOT?: RoomUserWhereInput | RoomUserWhereInput[]
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    createdAt?: DateTimeFilter<"RoomUser"> | Date | string
    updatedAt?: DateTimeFilter<"RoomUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomUser"> | Date | string | null
    role?: EnumRoomUserRoleFilter<"RoomUser"> | $Enums.RoomUserRole
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "roomId_userId">

  export type RoomUserOrderByWithAggregationInput = {
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: RoomUserCountOrderByAggregateInput
    _max?: RoomUserMaxOrderByAggregateInput
    _min?: RoomUserMinOrderByAggregateInput
  }

  export type RoomUserScalarWhereWithAggregatesInput = {
    AND?: RoomUserScalarWhereWithAggregatesInput | RoomUserScalarWhereWithAggregatesInput[]
    OR?: RoomUserScalarWhereWithAggregatesInput[]
    NOT?: RoomUserScalarWhereWithAggregatesInput | RoomUserScalarWhereWithAggregatesInput[]
    roomId?: StringWithAggregatesFilter<"RoomUser"> | string
    userId?: StringWithAggregatesFilter<"RoomUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomUser"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RoomUser"> | Date | string | null
    role?: EnumRoomUserRoleWithAggregatesFilter<"RoomUser"> | $Enums.RoomUserRole
  }

  export type MuralWhereInput = {
    AND?: MuralWhereInput | MuralWhereInput[]
    OR?: MuralWhereInput[]
    NOT?: MuralWhereInput | MuralWhereInput[]
    id?: StringFilter<"Mural"> | string
    title?: StringFilter<"Mural"> | string
    createdAt?: DateTimeFilter<"Mural"> | Date | string
    updatedAt?: DateTimeFilter<"Mural"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Mural"> | Date | string | null
    roomId?: StringFilter<"Mural"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    users?: MuralUserListRelationFilter
  }

  export type MuralOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    roomId?: SortOrder
    room?: RoomOrderByWithRelationInput
    users?: MuralUserOrderByRelationAggregateInput
  }

  export type MuralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MuralWhereInput | MuralWhereInput[]
    OR?: MuralWhereInput[]
    NOT?: MuralWhereInput | MuralWhereInput[]
    title?: StringFilter<"Mural"> | string
    createdAt?: DateTimeFilter<"Mural"> | Date | string
    updatedAt?: DateTimeFilter<"Mural"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Mural"> | Date | string | null
    roomId?: StringFilter<"Mural"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    users?: MuralUserListRelationFilter
  }, "id">

  export type MuralOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    roomId?: SortOrder
    _count?: MuralCountOrderByAggregateInput
    _max?: MuralMaxOrderByAggregateInput
    _min?: MuralMinOrderByAggregateInput
  }

  export type MuralScalarWhereWithAggregatesInput = {
    AND?: MuralScalarWhereWithAggregatesInput | MuralScalarWhereWithAggregatesInput[]
    OR?: MuralScalarWhereWithAggregatesInput[]
    NOT?: MuralScalarWhereWithAggregatesInput | MuralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mural"> | string
    title?: StringWithAggregatesFilter<"Mural"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mural"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mural"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Mural"> | Date | string | null
    roomId?: StringWithAggregatesFilter<"Mural"> | string
  }

  export type MuralUserWhereInput = {
    AND?: MuralUserWhereInput | MuralUserWhereInput[]
    OR?: MuralUserWhereInput[]
    NOT?: MuralUserWhereInput | MuralUserWhereInput[]
    muralId?: StringFilter<"MuralUser"> | string
    userId?: StringFilter<"MuralUser"> | string
    createdAt?: DateTimeFilter<"MuralUser"> | Date | string
    updatedAt?: DateTimeFilter<"MuralUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MuralUser"> | Date | string | null
    role?: EnumMuralUserRoleFilter<"MuralUser"> | $Enums.MuralUserRole
    mural?: XOR<MuralScalarRelationFilter, MuralWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MuralUserOrderByWithRelationInput = {
    muralId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    mural?: MuralOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MuralUserWhereUniqueInput = Prisma.AtLeast<{
    muralId_userId?: MuralUserMuralIdUserIdCompoundUniqueInput
    AND?: MuralUserWhereInput | MuralUserWhereInput[]
    OR?: MuralUserWhereInput[]
    NOT?: MuralUserWhereInput | MuralUserWhereInput[]
    muralId?: StringFilter<"MuralUser"> | string
    userId?: StringFilter<"MuralUser"> | string
    createdAt?: DateTimeFilter<"MuralUser"> | Date | string
    updatedAt?: DateTimeFilter<"MuralUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MuralUser"> | Date | string | null
    role?: EnumMuralUserRoleFilter<"MuralUser"> | $Enums.MuralUserRole
    mural?: XOR<MuralScalarRelationFilter, MuralWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "muralId_userId">

  export type MuralUserOrderByWithAggregationInput = {
    muralId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: MuralUserCountOrderByAggregateInput
    _max?: MuralUserMaxOrderByAggregateInput
    _min?: MuralUserMinOrderByAggregateInput
  }

  export type MuralUserScalarWhereWithAggregatesInput = {
    AND?: MuralUserScalarWhereWithAggregatesInput | MuralUserScalarWhereWithAggregatesInput[]
    OR?: MuralUserScalarWhereWithAggregatesInput[]
    NOT?: MuralUserScalarWhereWithAggregatesInput | MuralUserScalarWhereWithAggregatesInput[]
    muralId?: StringWithAggregatesFilter<"MuralUser"> | string
    userId?: StringWithAggregatesFilter<"MuralUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MuralUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MuralUser"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MuralUser"> | Date | string | null
    role?: EnumMuralUserRoleWithAggregatesFilter<"MuralUser"> | $Enums.MuralUserRole
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    companyId?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    users?: GroupUserListRelationFilter
    workspaces?: GroupWorkspaceListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    users?: GroupUserOrderByRelationAggregateInput
    workspaces?: GroupWorkspaceOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    companyId?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    users?: GroupUserListRelationFilter
    workspaces?: GroupWorkspaceListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    companyId?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
  }

  export type GroupUserWhereInput = {
    AND?: GroupUserWhereInput | GroupUserWhereInput[]
    OR?: GroupUserWhereInput[]
    NOT?: GroupUserWhereInput | GroupUserWhereInput[]
    userId?: StringFilter<"GroupUser"> | string
    groupId?: StringFilter<"GroupUser"> | string
    createdAt?: DateTimeFilter<"GroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"GroupUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupUser"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupUserOrderByWithRelationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupUserWhereUniqueInput = Prisma.AtLeast<{
    groupId_userId?: GroupUserGroupIdUserIdCompoundUniqueInput
    AND?: GroupUserWhereInput | GroupUserWhereInput[]
    OR?: GroupUserWhereInput[]
    NOT?: GroupUserWhereInput | GroupUserWhereInput[]
    userId?: StringFilter<"GroupUser"> | string
    groupId?: StringFilter<"GroupUser"> | string
    createdAt?: DateTimeFilter<"GroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"GroupUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupUser"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "groupId_userId">

  export type GroupUserOrderByWithAggregationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GroupUserCountOrderByAggregateInput
    _max?: GroupUserMaxOrderByAggregateInput
    _min?: GroupUserMinOrderByAggregateInput
  }

  export type GroupUserScalarWhereWithAggregatesInput = {
    AND?: GroupUserScalarWhereWithAggregatesInput | GroupUserScalarWhereWithAggregatesInput[]
    OR?: GroupUserScalarWhereWithAggregatesInput[]
    NOT?: GroupUserScalarWhereWithAggregatesInput | GroupUserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"GroupUser"> | string
    groupId?: StringWithAggregatesFilter<"GroupUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupUser"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GroupUser"> | Date | string | null
  }

  export type GroupWorkspaceWhereInput = {
    AND?: GroupWorkspaceWhereInput | GroupWorkspaceWhereInput[]
    OR?: GroupWorkspaceWhereInput[]
    NOT?: GroupWorkspaceWhereInput | GroupWorkspaceWhereInput[]
    groupId?: StringFilter<"GroupWorkspace"> | string
    workspaceId?: StringFilter<"GroupWorkspace"> | string
    createdAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    updatedAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupWorkspace"> | Date | string | null
    role?: EnumGroupWorkspaceRoleFilter<"GroupWorkspace"> | $Enums.GroupWorkspaceRole
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type GroupWorkspaceOrderByWithRelationInput = {
    groupId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    group?: GroupOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type GroupWorkspaceWhereUniqueInput = Prisma.AtLeast<{
    groupId_workspaceId?: GroupWorkspaceGroupIdWorkspaceIdCompoundUniqueInput
    AND?: GroupWorkspaceWhereInput | GroupWorkspaceWhereInput[]
    OR?: GroupWorkspaceWhereInput[]
    NOT?: GroupWorkspaceWhereInput | GroupWorkspaceWhereInput[]
    groupId?: StringFilter<"GroupWorkspace"> | string
    workspaceId?: StringFilter<"GroupWorkspace"> | string
    createdAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    updatedAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupWorkspace"> | Date | string | null
    role?: EnumGroupWorkspaceRoleFilter<"GroupWorkspace"> | $Enums.GroupWorkspaceRole
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "groupId_workspaceId">

  export type GroupWorkspaceOrderByWithAggregationInput = {
    groupId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: GroupWorkspaceCountOrderByAggregateInput
    _max?: GroupWorkspaceMaxOrderByAggregateInput
    _min?: GroupWorkspaceMinOrderByAggregateInput
  }

  export type GroupWorkspaceScalarWhereWithAggregatesInput = {
    AND?: GroupWorkspaceScalarWhereWithAggregatesInput | GroupWorkspaceScalarWhereWithAggregatesInput[]
    OR?: GroupWorkspaceScalarWhereWithAggregatesInput[]
    NOT?: GroupWorkspaceScalarWhereWithAggregatesInput | GroupWorkspaceScalarWhereWithAggregatesInput[]
    groupId?: StringWithAggregatesFilter<"GroupWorkspace"> | string
    workspaceId?: StringWithAggregatesFilter<"GroupWorkspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupWorkspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupWorkspace"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GroupWorkspace"> | Date | string | null
    role?: EnumGroupWorkspaceRoleWithAggregatesFilter<"GroupWorkspace"> | $Enums.GroupWorkspaceRole
  }

  export type UserCreateInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    murals?: MuralUserCreateNestedManyWithoutUserInput
    groups?: GroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    murals?: MuralUserUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    murals?: MuralUserUpdateManyWithoutUserNestedInput
    groups?: GroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    murals?: MuralUserUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    workspaces?: WorkspaceCreateNestedManyWithoutCompanyInput
    groups?: GroupCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutCompanyInput
    groups?: GroupUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    workspaces?: WorkspaceUpdateManyWithoutCompanyNestedInput
    groups?: GroupUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    workspaces?: WorkspaceUncheckedUpdateManyWithoutCompanyNestedInput
    groups?: GroupUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomCreateNestedManyWithoutWorkspaceInput
    company?: CompanyCreateNestedOneWithoutWorkspacesInput
    groups?: GroupWorkspaceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id: string
    name: string
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomUncheckedCreateNestedManyWithoutWorkspaceInput
    groups?: GroupWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUpdateManyWithoutWorkspaceNestedInput
    company?: CompanyUpdateOneWithoutWorkspacesNestedInput
    groups?: GroupWorkspaceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutWorkspaceNestedInput
    groups?: GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id: string
    name: string
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
    user: UserCreateNestedOneWithoutWorkspacesInput
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type WorkspaceUserUncheckedCreateInput = {
    userId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type WorkspaceUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserCreateManyInput = {
    userId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type RoomCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutRoomsInput
    users?: RoomUserCreateNestedManyWithoutRoomInput
    murals?: MuralCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaceId: string
    users?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
    murals?: MuralUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutRoomsNestedInput
    users?: RoomUserUpdateManyWithoutRoomNestedInput
    murals?: MuralUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    users?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
    murals?: MuralUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaceId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
    room: RoomCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUserUncheckedCreateInput = {
    roomId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type RoomUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
    room?: RoomUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUserUncheckedUpdateInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type RoomUserCreateManyInput = {
    roomId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type RoomUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type RoomUserUncheckedUpdateManyInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type MuralCreateInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutMuralsInput
    users?: MuralUserCreateNestedManyWithoutMuralInput
  }

  export type MuralUncheckedCreateInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roomId: string
    users?: MuralUserUncheckedCreateNestedManyWithoutMuralInput
  }

  export type MuralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutMuralsNestedInput
    users?: MuralUserUpdateManyWithoutMuralNestedInput
  }

  export type MuralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    users?: MuralUserUncheckedUpdateManyWithoutMuralNestedInput
  }

  export type MuralCreateManyInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roomId: string
  }

  export type MuralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MuralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type MuralUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
    mural: MuralCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutMuralsInput
  }

  export type MuralUserUncheckedCreateInput = {
    muralId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type MuralUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
    mural?: MuralUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutMuralsNestedInput
  }

  export type MuralUserUncheckedUpdateInput = {
    muralId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type MuralUserCreateManyInput = {
    muralId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type MuralUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type MuralUserUncheckedUpdateManyInput = {
    muralId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type GroupCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutGroupsInput
    users?: GroupUserCreateNestedManyWithoutGroupInput
    workspaces?: GroupWorkspaceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id: string
    companyId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: GroupUserUncheckedCreateNestedManyWithoutGroupInput
    workspaces?: GroupWorkspaceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutGroupsNestedInput
    users?: GroupUserUpdateManyWithoutGroupNestedInput
    workspaces?: GroupWorkspaceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: GroupUserUncheckedUpdateManyWithoutGroupNestedInput
    workspaces?: GroupWorkspaceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id: string
    companyId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutGroupsInput
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type GroupUserUncheckedCreateInput = {
    userId: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type GroupUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUserCreateManyInput = {
    userId: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupWorkspaceCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
    group: GroupCreateNestedOneWithoutWorkspacesInput
    workspace: WorkspaceCreateNestedOneWithoutGroupsInput
  }

  export type GroupWorkspaceUncheckedCreateInput = {
    groupId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
    group?: GroupUpdateOneRequiredWithoutWorkspacesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupWorkspaceUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceCreateManyInput = {
    groupId: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type WorkspaceUserListRelationFilter = {
    every?: WorkspaceUserWhereInput
    some?: WorkspaceUserWhereInput
    none?: WorkspaceUserWhereInput
  }

  export type RoomUserListRelationFilter = {
    every?: RoomUserWhereInput
    some?: RoomUserWhereInput
    none?: RoomUserWhereInput
  }

  export type MuralUserListRelationFilter = {
    every?: MuralUserWhereInput
    some?: MuralUserWhereInput
    none?: MuralUserWhereInput
  }

  export type GroupUserListRelationFilter = {
    every?: GroupUserWhereInput
    some?: GroupUserWhereInput
    none?: GroupUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuralUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    companyId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    companyId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    companyId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type GroupWorkspaceListRelationFilter = {
    every?: GroupWorkspaceWhereInput
    some?: GroupWorkspaceWhereInput
    none?: GroupWorkspaceWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupWorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumWorkspaceUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceUserRole | EnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel> | $Enums.WorkspaceUserRole
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type WorkspaceUserWorkspaceIdUserIdCompoundUniqueInput = {
    workspaceId: string
    userId: string
  }

  export type WorkspaceUserCountOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceUserMinOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumWorkspaceUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceUserRole | EnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel>
  }

  export type MuralListRelationFilter = {
    every?: MuralWhereInput
    some?: MuralWhereInput
    none?: MuralWhereInput
  }

  export type MuralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type EnumRoomUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUserRole | EnumRoomUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUserRoleFilter<$PrismaModel> | $Enums.RoomUserRole
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomUserRoomIdUserIdCompoundUniqueInput = {
    roomId: string
    userId: string
  }

  export type RoomUserCountOrderByAggregateInput = {
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type RoomUserMaxOrderByAggregateInput = {
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type RoomUserMinOrderByAggregateInput = {
    roomId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumRoomUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUserRole | EnumRoomUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.RoomUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomUserRoleFilter<$PrismaModel>
    _max?: NestedEnumRoomUserRoleFilter<$PrismaModel>
  }

  export type MuralCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roomId?: SortOrder
  }

  export type MuralMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roomId?: SortOrder
  }

  export type MuralMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roomId?: SortOrder
  }

  export type EnumMuralUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MuralUserRole | EnumMuralUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMuralUserRoleFilter<$PrismaModel> | $Enums.MuralUserRole
  }

  export type MuralScalarRelationFilter = {
    is?: MuralWhereInput
    isNot?: MuralWhereInput
  }

  export type MuralUserMuralIdUserIdCompoundUniqueInput = {
    muralId: string
    userId: string
  }

  export type MuralUserCountOrderByAggregateInput = {
    muralId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type MuralUserMaxOrderByAggregateInput = {
    muralId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type MuralUserMinOrderByAggregateInput = {
    muralId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumMuralUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MuralUserRole | EnumMuralUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMuralUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.MuralUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMuralUserRoleFilter<$PrismaModel>
    _max?: NestedEnumMuralUserRoleFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupUserGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupUserCountOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GroupUserMinOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumGroupWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupWorkspaceRole | EnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel> | $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceGroupIdWorkspaceIdCompoundUniqueInput = {
    groupId: string
    workspaceId: string
  }

  export type GroupWorkspaceCountOrderByAggregateInput = {
    groupId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type GroupWorkspaceMaxOrderByAggregateInput = {
    groupId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type GroupWorkspaceMinOrderByAggregateInput = {
    groupId?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumGroupWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupWorkspaceRole | EnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupWorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type WorkspaceUserCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type RoomUserCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type MuralUserCreateNestedManyWithoutUserInput = {
    create?: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput> | MuralUserCreateWithoutUserInput[] | MuralUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutUserInput | MuralUserCreateOrConnectWithoutUserInput[]
    createMany?: MuralUserCreateManyUserInputEnvelope
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
  }

  export type GroupUserCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput> | GroupUserCreateWithoutUserInput[] | GroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutUserInput | GroupUserCreateOrConnectWithoutUserInput[]
    createMany?: GroupUserCreateManyUserInputEnvelope
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type RoomUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type MuralUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput> | MuralUserCreateWithoutUserInput[] | MuralUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutUserInput | MuralUserCreateOrConnectWithoutUserInput[]
    createMany?: MuralUserCreateManyUserInputEnvelope
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
  }

  export type GroupUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput> | GroupUserCreateWithoutUserInput[] | GroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutUserInput | GroupUserCreateOrConnectWithoutUserInput[]
    createMany?: GroupUserCreateManyUserInputEnvelope
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type RoomUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutUserInput | RoomUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutUserInput | RoomUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutUserInput | RoomUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type MuralUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput> | MuralUserCreateWithoutUserInput[] | MuralUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutUserInput | MuralUserCreateOrConnectWithoutUserInput[]
    upsert?: MuralUserUpsertWithWhereUniqueWithoutUserInput | MuralUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MuralUserCreateManyUserInputEnvelope
    set?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    disconnect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    delete?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    update?: MuralUserUpdateWithWhereUniqueWithoutUserInput | MuralUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MuralUserUpdateManyWithWhereWithoutUserInput | MuralUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
  }

  export type GroupUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput> | GroupUserCreateWithoutUserInput[] | GroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutUserInput | GroupUserCreateOrConnectWithoutUserInput[]
    upsert?: GroupUserUpsertWithWhereUniqueWithoutUserInput | GroupUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupUserCreateManyUserInputEnvelope
    set?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    disconnect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    delete?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    update?: GroupUserUpdateWithWhereUniqueWithoutUserInput | GroupUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUserUpdateManyWithWhereWithoutUserInput | GroupUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type RoomUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutUserInput | RoomUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutUserInput | RoomUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutUserInput | RoomUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type MuralUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput> | MuralUserCreateWithoutUserInput[] | MuralUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutUserInput | MuralUserCreateOrConnectWithoutUserInput[]
    upsert?: MuralUserUpsertWithWhereUniqueWithoutUserInput | MuralUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MuralUserCreateManyUserInputEnvelope
    set?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    disconnect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    delete?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    update?: MuralUserUpdateWithWhereUniqueWithoutUserInput | MuralUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MuralUserUpdateManyWithWhereWithoutUserInput | MuralUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
  }

  export type GroupUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput> | GroupUserCreateWithoutUserInput[] | GroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutUserInput | GroupUserCreateOrConnectWithoutUserInput[]
    upsert?: GroupUserUpsertWithWhereUniqueWithoutUserInput | GroupUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupUserCreateManyUserInputEnvelope
    set?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    disconnect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    delete?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    update?: GroupUserUpdateWithWhereUniqueWithoutUserInput | GroupUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUserUpdateManyWithWhereWithoutUserInput | GroupUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput> | WorkspaceCreateWithoutCompanyInput[] | WorkspaceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCompanyInput | WorkspaceCreateOrConnectWithoutCompanyInput[]
    createMany?: WorkspaceCreateManyCompanyInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutCompanyInput = {
    create?: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput> | GroupCreateWithoutCompanyInput[] | GroupUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCompanyInput | GroupCreateOrConnectWithoutCompanyInput[]
    createMany?: GroupCreateManyCompanyInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput> | WorkspaceCreateWithoutCompanyInput[] | WorkspaceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCompanyInput | WorkspaceCreateOrConnectWithoutCompanyInput[]
    createMany?: WorkspaceCreateManyCompanyInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput> | GroupCreateWithoutCompanyInput[] | GroupUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCompanyInput | GroupCreateOrConnectWithoutCompanyInput[]
    createMany?: GroupCreateManyCompanyInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WorkspaceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput> | WorkspaceCreateWithoutCompanyInput[] | WorkspaceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCompanyInput | WorkspaceCreateOrConnectWithoutCompanyInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutCompanyInput | WorkspaceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorkspaceCreateManyCompanyInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutCompanyInput | WorkspaceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutCompanyInput | WorkspaceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput> | GroupCreateWithoutCompanyInput[] | GroupUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCompanyInput | GroupCreateOrConnectWithoutCompanyInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCompanyInput | GroupUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: GroupCreateManyCompanyInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCompanyInput | GroupUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCompanyInput | GroupUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput> | WorkspaceCreateWithoutCompanyInput[] | WorkspaceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCompanyInput | WorkspaceCreateOrConnectWithoutCompanyInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutCompanyInput | WorkspaceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WorkspaceCreateManyCompanyInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutCompanyInput | WorkspaceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutCompanyInput | WorkspaceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput> | GroupCreateWithoutCompanyInput[] | GroupUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCompanyInput | GroupCreateOrConnectWithoutCompanyInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCompanyInput | GroupUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: GroupCreateManyCompanyInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCompanyInput | GroupUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCompanyInput | GroupUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type WorkspaceUserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput> | RoomCreateWithoutWorkspaceInput[] | RoomUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWorkspaceInput | RoomCreateOrConnectWithoutWorkspaceInput[]
    createMany?: RoomCreateManyWorkspaceInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<CompanyCreateWithoutWorkspacesInput, CompanyUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorkspacesInput
    connect?: CompanyWhereUniqueInput
  }

  export type GroupWorkspaceCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput> | GroupWorkspaceCreateWithoutWorkspaceInput[] | GroupWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutWorkspaceInput | GroupWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GroupWorkspaceCreateManyWorkspaceInputEnvelope
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput> | RoomCreateWithoutWorkspaceInput[] | RoomUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWorkspaceInput | RoomCreateOrConnectWithoutWorkspaceInput[]
    createMany?: RoomCreateManyWorkspaceInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type GroupWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput> | GroupWorkspaceCreateWithoutWorkspaceInput[] | GroupWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutWorkspaceInput | GroupWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GroupWorkspaceCreateManyWorkspaceInputEnvelope
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput> | RoomCreateWithoutWorkspaceInput[] | RoomUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWorkspaceInput | RoomCreateOrConnectWithoutWorkspaceInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutWorkspaceInput | RoomUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: RoomCreateManyWorkspaceInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutWorkspaceInput | RoomUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutWorkspaceInput | RoomUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutWorkspacesNestedInput = {
    create?: XOR<CompanyCreateWithoutWorkspacesInput, CompanyUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWorkspacesInput
    upsert?: CompanyUpsertWithoutWorkspacesInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutWorkspacesInput, CompanyUpdateWithoutWorkspacesInput>, CompanyUncheckedUpdateWithoutWorkspacesInput>
  }

  export type GroupWorkspaceUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput> | GroupWorkspaceCreateWithoutWorkspaceInput[] | GroupWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutWorkspaceInput | GroupWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GroupWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput | GroupWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GroupWorkspaceCreateManyWorkspaceInputEnvelope
    set?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    disconnect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    delete?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    update?: GroupWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput | GroupWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GroupWorkspaceUpdateManyWithWhereWithoutWorkspaceInput | GroupWorkspaceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput> | RoomCreateWithoutWorkspaceInput[] | RoomUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWorkspaceInput | RoomCreateOrConnectWithoutWorkspaceInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutWorkspaceInput | RoomUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: RoomCreateManyWorkspaceInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutWorkspaceInput | RoomUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutWorkspaceInput | RoomUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput> | GroupWorkspaceCreateWithoutWorkspaceInput[] | GroupWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutWorkspaceInput | GroupWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GroupWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput | GroupWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GroupWorkspaceCreateManyWorkspaceInputEnvelope
    set?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    disconnect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    delete?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    update?: GroupWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput | GroupWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GroupWorkspaceUpdateManyWithWhereWithoutWorkspaceInput | GroupWorkspaceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type EnumWorkspaceUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.WorkspaceUserRole
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceCreateNestedOneWithoutRoomsInput = {
    create?: XOR<WorkspaceCreateWithoutRoomsInput, WorkspaceUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutRoomsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type RoomUserCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type MuralCreateNestedManyWithoutRoomInput = {
    create?: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput> | MuralCreateWithoutRoomInput[] | MuralUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MuralCreateOrConnectWithoutRoomInput | MuralCreateOrConnectWithoutRoomInput[]
    createMany?: MuralCreateManyRoomInputEnvelope
    connect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
  }

  export type RoomUserUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type MuralUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput> | MuralCreateWithoutRoomInput[] | MuralUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MuralCreateOrConnectWithoutRoomInput | MuralCreateOrConnectWithoutRoomInput[]
    createMany?: MuralCreateManyRoomInputEnvelope
    connect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutRoomsInput, WorkspaceUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutRoomsInput
    upsert?: WorkspaceUpsertWithoutRoomsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutRoomsInput, WorkspaceUpdateWithoutRoomsInput>, WorkspaceUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomUserUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutRoomInput | RoomUserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutRoomInput | RoomUserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutRoomInput | RoomUserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type MuralUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput> | MuralCreateWithoutRoomInput[] | MuralUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MuralCreateOrConnectWithoutRoomInput | MuralCreateOrConnectWithoutRoomInput[]
    upsert?: MuralUpsertWithWhereUniqueWithoutRoomInput | MuralUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MuralCreateManyRoomInputEnvelope
    set?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    disconnect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    delete?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    connect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    update?: MuralUpdateWithWhereUniqueWithoutRoomInput | MuralUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MuralUpdateManyWithWhereWithoutRoomInput | MuralUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MuralScalarWhereInput | MuralScalarWhereInput[]
  }

  export type RoomUserUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutRoomInput | RoomUserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutRoomInput | RoomUserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutRoomInput | RoomUserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type MuralUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput> | MuralCreateWithoutRoomInput[] | MuralUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MuralCreateOrConnectWithoutRoomInput | MuralCreateOrConnectWithoutRoomInput[]
    upsert?: MuralUpsertWithWhereUniqueWithoutRoomInput | MuralUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MuralCreateManyRoomInputEnvelope
    set?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    disconnect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    delete?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    connect?: MuralWhereUniqueInput | MuralWhereUniqueInput[]
    update?: MuralUpdateWithWhereUniqueWithoutRoomInput | MuralUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MuralUpdateManyWithWhereWithoutRoomInput | MuralUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MuralScalarWhereInput | MuralScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoomUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.RoomUserRole
  }

  export type RoomUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput
    upsert?: RoomUpsertWithoutUsersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutUsersInput, RoomUpdateWithoutUsersInput>, RoomUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomCreateNestedOneWithoutMuralsInput = {
    create?: XOR<RoomCreateWithoutMuralsInput, RoomUncheckedCreateWithoutMuralsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMuralsInput
    connect?: RoomWhereUniqueInput
  }

  export type MuralUserCreateNestedManyWithoutMuralInput = {
    create?: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput> | MuralUserCreateWithoutMuralInput[] | MuralUserUncheckedCreateWithoutMuralInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutMuralInput | MuralUserCreateOrConnectWithoutMuralInput[]
    createMany?: MuralUserCreateManyMuralInputEnvelope
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
  }

  export type MuralUserUncheckedCreateNestedManyWithoutMuralInput = {
    create?: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput> | MuralUserCreateWithoutMuralInput[] | MuralUserUncheckedCreateWithoutMuralInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutMuralInput | MuralUserCreateOrConnectWithoutMuralInput[]
    createMany?: MuralUserCreateManyMuralInputEnvelope
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutMuralsNestedInput = {
    create?: XOR<RoomCreateWithoutMuralsInput, RoomUncheckedCreateWithoutMuralsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMuralsInput
    upsert?: RoomUpsertWithoutMuralsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMuralsInput, RoomUpdateWithoutMuralsInput>, RoomUncheckedUpdateWithoutMuralsInput>
  }

  export type MuralUserUpdateManyWithoutMuralNestedInput = {
    create?: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput> | MuralUserCreateWithoutMuralInput[] | MuralUserUncheckedCreateWithoutMuralInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutMuralInput | MuralUserCreateOrConnectWithoutMuralInput[]
    upsert?: MuralUserUpsertWithWhereUniqueWithoutMuralInput | MuralUserUpsertWithWhereUniqueWithoutMuralInput[]
    createMany?: MuralUserCreateManyMuralInputEnvelope
    set?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    disconnect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    delete?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    update?: MuralUserUpdateWithWhereUniqueWithoutMuralInput | MuralUserUpdateWithWhereUniqueWithoutMuralInput[]
    updateMany?: MuralUserUpdateManyWithWhereWithoutMuralInput | MuralUserUpdateManyWithWhereWithoutMuralInput[]
    deleteMany?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
  }

  export type MuralUserUncheckedUpdateManyWithoutMuralNestedInput = {
    create?: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput> | MuralUserCreateWithoutMuralInput[] | MuralUserUncheckedCreateWithoutMuralInput[]
    connectOrCreate?: MuralUserCreateOrConnectWithoutMuralInput | MuralUserCreateOrConnectWithoutMuralInput[]
    upsert?: MuralUserUpsertWithWhereUniqueWithoutMuralInput | MuralUserUpsertWithWhereUniqueWithoutMuralInput[]
    createMany?: MuralUserCreateManyMuralInputEnvelope
    set?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    disconnect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    delete?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    connect?: MuralUserWhereUniqueInput | MuralUserWhereUniqueInput[]
    update?: MuralUserUpdateWithWhereUniqueWithoutMuralInput | MuralUserUpdateWithWhereUniqueWithoutMuralInput[]
    updateMany?: MuralUserUpdateManyWithWhereWithoutMuralInput | MuralUserUpdateManyWithWhereWithoutMuralInput[]
    deleteMany?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
  }

  export type MuralCreateNestedOneWithoutUsersInput = {
    create?: XOR<MuralCreateWithoutUsersInput, MuralUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MuralCreateOrConnectWithoutUsersInput
    connect?: MuralWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMuralsInput = {
    create?: XOR<UserCreateWithoutMuralsInput, UserUncheckedCreateWithoutMuralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuralsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMuralUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.MuralUserRole
  }

  export type MuralUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<MuralCreateWithoutUsersInput, MuralUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MuralCreateOrConnectWithoutUsersInput
    upsert?: MuralUpsertWithoutUsersInput
    connect?: MuralWhereUniqueInput
    update?: XOR<XOR<MuralUpdateToOneWithWhereWithoutUsersInput, MuralUpdateWithoutUsersInput>, MuralUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutMuralsNestedInput = {
    create?: XOR<UserCreateWithoutMuralsInput, UserUncheckedCreateWithoutMuralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMuralsInput
    upsert?: UserUpsertWithoutMuralsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMuralsInput, UserUpdateWithoutMuralsInput>, UserUncheckedUpdateWithoutMuralsInput>
  }

  export type CompanyCreateNestedOneWithoutGroupsInput = {
    create?: XOR<CompanyCreateWithoutGroupsInput, CompanyUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutGroupsInput
    connect?: CompanyWhereUniqueInput
  }

  export type GroupUserCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput> | GroupUserCreateWithoutGroupInput[] | GroupUserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutGroupInput | GroupUserCreateOrConnectWithoutGroupInput[]
    createMany?: GroupUserCreateManyGroupInputEnvelope
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
  }

  export type GroupWorkspaceCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput> | GroupWorkspaceCreateWithoutGroupInput[] | GroupWorkspaceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutGroupInput | GroupWorkspaceCreateOrConnectWithoutGroupInput[]
    createMany?: GroupWorkspaceCreateManyGroupInputEnvelope
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
  }

  export type GroupUserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput> | GroupUserCreateWithoutGroupInput[] | GroupUserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutGroupInput | GroupUserCreateOrConnectWithoutGroupInput[]
    createMany?: GroupUserCreateManyGroupInputEnvelope
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
  }

  export type GroupWorkspaceUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput> | GroupWorkspaceCreateWithoutGroupInput[] | GroupWorkspaceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutGroupInput | GroupWorkspaceCreateOrConnectWithoutGroupInput[]
    createMany?: GroupWorkspaceCreateManyGroupInputEnvelope
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<CompanyCreateWithoutGroupsInput, CompanyUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutGroupsInput
    upsert?: CompanyUpsertWithoutGroupsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutGroupsInput, CompanyUpdateWithoutGroupsInput>, CompanyUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupUserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput> | GroupUserCreateWithoutGroupInput[] | GroupUserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutGroupInput | GroupUserCreateOrConnectWithoutGroupInput[]
    upsert?: GroupUserUpsertWithWhereUniqueWithoutGroupInput | GroupUserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupUserCreateManyGroupInputEnvelope
    set?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    disconnect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    delete?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    update?: GroupUserUpdateWithWhereUniqueWithoutGroupInput | GroupUserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupUserUpdateManyWithWhereWithoutGroupInput | GroupUserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
  }

  export type GroupWorkspaceUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput> | GroupWorkspaceCreateWithoutGroupInput[] | GroupWorkspaceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutGroupInput | GroupWorkspaceCreateOrConnectWithoutGroupInput[]
    upsert?: GroupWorkspaceUpsertWithWhereUniqueWithoutGroupInput | GroupWorkspaceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupWorkspaceCreateManyGroupInputEnvelope
    set?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    disconnect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    delete?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    update?: GroupWorkspaceUpdateWithWhereUniqueWithoutGroupInput | GroupWorkspaceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupWorkspaceUpdateManyWithWhereWithoutGroupInput | GroupWorkspaceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
  }

  export type GroupUserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput> | GroupUserCreateWithoutGroupInput[] | GroupUserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupUserCreateOrConnectWithoutGroupInput | GroupUserCreateOrConnectWithoutGroupInput[]
    upsert?: GroupUserUpsertWithWhereUniqueWithoutGroupInput | GroupUserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupUserCreateManyGroupInputEnvelope
    set?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    disconnect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    delete?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    connect?: GroupUserWhereUniqueInput | GroupUserWhereUniqueInput[]
    update?: GroupUserUpdateWithWhereUniqueWithoutGroupInput | GroupUserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupUserUpdateManyWithWhereWithoutGroupInput | GroupUserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
  }

  export type GroupWorkspaceUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput> | GroupWorkspaceCreateWithoutGroupInput[] | GroupWorkspaceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupWorkspaceCreateOrConnectWithoutGroupInput | GroupWorkspaceCreateOrConnectWithoutGroupInput[]
    upsert?: GroupWorkspaceUpsertWithWhereUniqueWithoutGroupInput | GroupWorkspaceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupWorkspaceCreateManyGroupInputEnvelope
    set?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    disconnect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    delete?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    connect?: GroupWorkspaceWhereUniqueInput | GroupWorkspaceWhereUniqueInput[]
    update?: GroupWorkspaceUpdateWithWhereUniqueWithoutGroupInput | GroupWorkspaceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupWorkspaceUpdateManyWithWhereWithoutGroupInput | GroupWorkspaceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<GroupCreateWithoutWorkspacesInput, GroupUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutWorkspacesInput
    connect?: GroupWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutGroupsInput = {
    create?: XOR<WorkspaceCreateWithoutGroupsInput, WorkspaceUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGroupsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type EnumGroupWorkspaceRoleFieldUpdateOperationsInput = {
    set?: $Enums.GroupWorkspaceRole
  }

  export type GroupUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<GroupCreateWithoutWorkspacesInput, GroupUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutWorkspacesInput
    upsert?: GroupUpsertWithoutWorkspacesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutWorkspacesInput, GroupUpdateWithoutWorkspacesInput>, GroupUncheckedUpdateWithoutWorkspacesInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutGroupsInput, WorkspaceUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGroupsInput
    upsert?: WorkspaceUpsertWithoutGroupsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutGroupsInput, WorkspaceUpdateWithoutGroupsInput>, WorkspaceUncheckedUpdateWithoutGroupsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumWorkspaceUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceUserRole | EnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel> | $Enums.WorkspaceUserRole
  }

  export type NestedEnumWorkspaceUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceUserRole | EnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceUserRole[] | ListEnumWorkspaceUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumRoomUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUserRole | EnumRoomUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUserRoleFilter<$PrismaModel> | $Enums.RoomUserRole
  }

  export type NestedEnumRoomUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUserRole | EnumRoomUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUserRole[] | ListEnumRoomUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.RoomUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomUserRoleFilter<$PrismaModel>
    _max?: NestedEnumRoomUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumMuralUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MuralUserRole | EnumMuralUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMuralUserRoleFilter<$PrismaModel> | $Enums.MuralUserRole
  }

  export type NestedEnumMuralUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MuralUserRole | EnumMuralUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MuralUserRole[] | ListEnumMuralUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMuralUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.MuralUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMuralUserRoleFilter<$PrismaModel>
    _max?: NestedEnumMuralUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumGroupWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupWorkspaceRole | EnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel> | $Enums.GroupWorkspaceRole
  }

  export type NestedEnumGroupWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupWorkspaceRole | EnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupWorkspaceRole[] | ListEnumGroupWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupWorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupWorkspaceRoleFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceCreateNestedManyWithoutCompanyInput
    groups?: GroupCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutCompanyInput
    groups?: GroupUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type WorkspaceUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type WorkspaceUserUncheckedCreateWithoutUserInput = {
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserCreateOrConnectWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserCreateManyUserInputEnvelope = {
    data: WorkspaceUserCreateManyUserInput | WorkspaceUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
    room: RoomCreateNestedOneWithoutUsersInput
  }

  export type RoomUserUncheckedCreateWithoutUserInput = {
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type RoomUserCreateOrConnectWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    create: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput>
  }

  export type RoomUserCreateManyUserInputEnvelope = {
    data: RoomUserCreateManyUserInput | RoomUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MuralUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
    mural: MuralCreateNestedOneWithoutUsersInput
  }

  export type MuralUserUncheckedCreateWithoutUserInput = {
    muralId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type MuralUserCreateOrConnectWithoutUserInput = {
    where: MuralUserWhereUniqueInput
    create: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput>
  }

  export type MuralUserCreateManyUserInputEnvelope = {
    data: MuralUserCreateManyUserInput | MuralUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUserCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type GroupUserUncheckedCreateWithoutUserInput = {
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUserCreateOrConnectWithoutUserInput = {
    where: GroupUserWhereUniqueInput
    create: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput>
  }

  export type GroupUserCreateManyUserInputEnvelope = {
    data: GroupUserCreateManyUserInput | GroupUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUpdateManyWithoutCompanyNestedInput
    groups?: GroupUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutCompanyNestedInput
    groups?: GroupUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceUserScalarWhereInput = {
    AND?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    OR?: WorkspaceUserScalarWhereInput[]
    NOT?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    userId?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    updatedAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"WorkspaceUser"> | Date | string | null
    role?: EnumWorkspaceUserRoleFilter<"WorkspaceUser"> | $Enums.WorkspaceUserRole
  }

  export type RoomUserUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    update: XOR<RoomUserUpdateWithoutUserInput, RoomUserUncheckedUpdateWithoutUserInput>
    create: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput>
  }

  export type RoomUserUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    data: XOR<RoomUserUpdateWithoutUserInput, RoomUserUncheckedUpdateWithoutUserInput>
  }

  export type RoomUserUpdateManyWithWhereWithoutUserInput = {
    where: RoomUserScalarWhereInput
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomUserScalarWhereInput = {
    AND?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
    OR?: RoomUserScalarWhereInput[]
    NOT?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    createdAt?: DateTimeFilter<"RoomUser"> | Date | string
    updatedAt?: DateTimeFilter<"RoomUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomUser"> | Date | string | null
    role?: EnumRoomUserRoleFilter<"RoomUser"> | $Enums.RoomUserRole
  }

  export type MuralUserUpsertWithWhereUniqueWithoutUserInput = {
    where: MuralUserWhereUniqueInput
    update: XOR<MuralUserUpdateWithoutUserInput, MuralUserUncheckedUpdateWithoutUserInput>
    create: XOR<MuralUserCreateWithoutUserInput, MuralUserUncheckedCreateWithoutUserInput>
  }

  export type MuralUserUpdateWithWhereUniqueWithoutUserInput = {
    where: MuralUserWhereUniqueInput
    data: XOR<MuralUserUpdateWithoutUserInput, MuralUserUncheckedUpdateWithoutUserInput>
  }

  export type MuralUserUpdateManyWithWhereWithoutUserInput = {
    where: MuralUserScalarWhereInput
    data: XOR<MuralUserUpdateManyMutationInput, MuralUserUncheckedUpdateManyWithoutUserInput>
  }

  export type MuralUserScalarWhereInput = {
    AND?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
    OR?: MuralUserScalarWhereInput[]
    NOT?: MuralUserScalarWhereInput | MuralUserScalarWhereInput[]
    muralId?: StringFilter<"MuralUser"> | string
    userId?: StringFilter<"MuralUser"> | string
    createdAt?: DateTimeFilter<"MuralUser"> | Date | string
    updatedAt?: DateTimeFilter<"MuralUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MuralUser"> | Date | string | null
    role?: EnumMuralUserRoleFilter<"MuralUser"> | $Enums.MuralUserRole
  }

  export type GroupUserUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupUserWhereUniqueInput
    update: XOR<GroupUserUpdateWithoutUserInput, GroupUserUncheckedUpdateWithoutUserInput>
    create: XOR<GroupUserCreateWithoutUserInput, GroupUserUncheckedCreateWithoutUserInput>
  }

  export type GroupUserUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupUserWhereUniqueInput
    data: XOR<GroupUserUpdateWithoutUserInput, GroupUserUncheckedUpdateWithoutUserInput>
  }

  export type GroupUserUpdateManyWithWhereWithoutUserInput = {
    where: GroupUserScalarWhereInput
    data: XOR<GroupUserUpdateManyMutationInput, GroupUserUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupUserScalarWhereInput = {
    AND?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
    OR?: GroupUserScalarWhereInput[]
    NOT?: GroupUserScalarWhereInput | GroupUserScalarWhereInput[]
    userId?: StringFilter<"GroupUser"> | string
    groupId?: StringFilter<"GroupUser"> | string
    createdAt?: DateTimeFilter<"GroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"GroupUser"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupUser"> | Date | string | null
  }

  export type UserCreateWithoutCompanyInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    murals?: MuralUserCreateNestedManyWithoutUserInput
    groups?: GroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    murals?: MuralUserUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomCreateNestedManyWithoutWorkspaceInput
    groups?: GroupWorkspaceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomUncheckedCreateNestedManyWithoutWorkspaceInput
    groups?: GroupWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutCompanyInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput>
  }

  export type WorkspaceCreateManyCompanyInputEnvelope = {
    data: WorkspaceCreateManyCompanyInput | WorkspaceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: GroupUserCreateNestedManyWithoutGroupInput
    workspaces?: GroupWorkspaceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: GroupUserUncheckedCreateNestedManyWithoutGroupInput
    workspaces?: GroupWorkspaceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCompanyInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput>
  }

  export type GroupCreateManyCompanyInputEnvelope = {
    data: GroupCreateManyCompanyInput | GroupCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    companyId?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutCompanyInput, WorkspaceUncheckedUpdateWithoutCompanyInput>
    create: XOR<WorkspaceCreateWithoutCompanyInput, WorkspaceUncheckedCreateWithoutCompanyInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutCompanyInput, WorkspaceUncheckedUpdateWithoutCompanyInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutCompanyInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    companyId?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
  }

  export type GroupUpsertWithWhereUniqueWithoutCompanyInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCompanyInput, GroupUncheckedUpdateWithoutCompanyInput>
    create: XOR<GroupCreateWithoutCompanyInput, GroupUncheckedCreateWithoutCompanyInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCompanyInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCompanyInput, GroupUncheckedUpdateWithoutCompanyInput>
  }

  export type GroupUpdateManyWithWhereWithoutCompanyInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCompanyInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    companyId?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
  }

  export type WorkspaceUserCreateWithoutWorkspaceInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUserUncheckedCreateWithoutWorkspaceInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceUserCreateManyWorkspaceInput | WorkspaceUserCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutWorkspaceInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: RoomUserCreateNestedManyWithoutRoomInput
    murals?: MuralCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutWorkspaceInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
    murals?: MuralUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutWorkspaceInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput>
  }

  export type RoomCreateManyWorkspaceInputEnvelope = {
    data: RoomCreateManyWorkspaceInput | RoomCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutWorkspacesInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    groups?: GroupCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutWorkspacesInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    groups?: GroupUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutWorkspacesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutWorkspacesInput, CompanyUncheckedCreateWithoutWorkspacesInput>
  }

  export type GroupWorkspaceCreateWithoutWorkspaceInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
    group: GroupCreateNestedOneWithoutWorkspacesInput
  }

  export type GroupWorkspaceUncheckedCreateWithoutWorkspaceInput = {
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceCreateOrConnectWithoutWorkspaceInput = {
    where: GroupWorkspaceWhereUniqueInput
    create: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput>
  }

  export type GroupWorkspaceCreateManyWorkspaceInputEnvelope = {
    data: GroupWorkspaceCreateManyWorkspaceInput | GroupWorkspaceCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutWorkspaceInput, RoomUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<RoomCreateWithoutWorkspaceInput, RoomUncheckedCreateWithoutWorkspaceInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutWorkspaceInput, RoomUncheckedUpdateWithoutWorkspaceInput>
  }

  export type RoomUpdateManyWithWhereWithoutWorkspaceInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    workspaceId?: StringFilter<"Room"> | string
  }

  export type CompanyUpsertWithoutWorkspacesInput = {
    update: XOR<CompanyUpdateWithoutWorkspacesInput, CompanyUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<CompanyCreateWithoutWorkspacesInput, CompanyUncheckedCreateWithoutWorkspacesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutWorkspacesInput, CompanyUncheckedUpdateWithoutWorkspacesInput>
  }

  export type CompanyUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    groups?: GroupUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    groups?: GroupUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type GroupWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: GroupWorkspaceWhereUniqueInput
    update: XOR<GroupWorkspaceUpdateWithoutWorkspaceInput, GroupWorkspaceUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<GroupWorkspaceCreateWithoutWorkspaceInput, GroupWorkspaceUncheckedCreateWithoutWorkspaceInput>
  }

  export type GroupWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: GroupWorkspaceWhereUniqueInput
    data: XOR<GroupWorkspaceUpdateWithoutWorkspaceInput, GroupWorkspaceUncheckedUpdateWithoutWorkspaceInput>
  }

  export type GroupWorkspaceUpdateManyWithWhereWithoutWorkspaceInput = {
    where: GroupWorkspaceScalarWhereInput
    data: XOR<GroupWorkspaceUpdateManyMutationInput, GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type GroupWorkspaceScalarWhereInput = {
    AND?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
    OR?: GroupWorkspaceScalarWhereInput[]
    NOT?: GroupWorkspaceScalarWhereInput | GroupWorkspaceScalarWhereInput[]
    groupId?: StringFilter<"GroupWorkspace"> | string
    workspaceId?: StringFilter<"GroupWorkspace"> | string
    createdAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    updatedAt?: DateTimeFilter<"GroupWorkspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GroupWorkspace"> | Date | string | null
    role?: EnumGroupWorkspaceRoleFilter<"GroupWorkspace"> | $Enums.GroupWorkspaceRole
  }

  export type UserCreateWithoutWorkspacesInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    murals?: MuralUserCreateNestedManyWithoutUserInput
    groups?: GroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    murals?: MuralUserUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rooms?: RoomCreateNestedManyWithoutWorkspaceInput
    company?: CompanyCreateNestedOneWithoutWorkspacesInput
    groups?: GroupWorkspaceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutWorkspaceInput
    groups?: GroupWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    murals?: MuralUserUpdateManyWithoutUserNestedInput
    groups?: GroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    murals?: MuralUserUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: RoomUpdateManyWithoutWorkspaceNestedInput
    company?: CompanyUpdateOneWithoutWorkspacesNestedInput
    groups?: GroupWorkspaceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: RoomUncheckedUpdateManyWithoutWorkspaceNestedInput
    groups?: GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutRoomsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    company?: CompanyCreateNestedOneWithoutWorkspacesInput
    groups?: GroupWorkspaceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutRoomsInput = {
    id: string
    name: string
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    groups?: GroupWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutRoomsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutRoomsInput, WorkspaceUncheckedCreateWithoutRoomsInput>
  }

  export type RoomUserCreateWithoutRoomInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUserUncheckedCreateWithoutRoomInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type RoomUserCreateOrConnectWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    create: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput>
  }

  export type RoomUserCreateManyRoomInputEnvelope = {
    data: RoomUserCreateManyRoomInput | RoomUserCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MuralCreateWithoutRoomInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: MuralUserCreateNestedManyWithoutMuralInput
  }

  export type MuralUncheckedCreateWithoutRoomInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: MuralUserUncheckedCreateNestedManyWithoutMuralInput
  }

  export type MuralCreateOrConnectWithoutRoomInput = {
    where: MuralWhereUniqueInput
    create: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput>
  }

  export type MuralCreateManyRoomInputEnvelope = {
    data: MuralCreateManyRoomInput | MuralCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutRoomsInput = {
    update: XOR<WorkspaceUpdateWithoutRoomsInput, WorkspaceUncheckedUpdateWithoutRoomsInput>
    create: XOR<WorkspaceCreateWithoutRoomsInput, WorkspaceUncheckedCreateWithoutRoomsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutRoomsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutRoomsInput, WorkspaceUncheckedUpdateWithoutRoomsInput>
  }

  export type WorkspaceUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    company?: CompanyUpdateOneWithoutWorkspacesNestedInput
    groups?: GroupWorkspaceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    groups?: GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type RoomUserUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    update: XOR<RoomUserUpdateWithoutRoomInput, RoomUserUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput>
  }

  export type RoomUserUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    data: XOR<RoomUserUpdateWithoutRoomInput, RoomUserUncheckedUpdateWithoutRoomInput>
  }

  export type RoomUserUpdateManyWithWhereWithoutRoomInput = {
    where: RoomUserScalarWhereInput
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyWithoutRoomInput>
  }

  export type MuralUpsertWithWhereUniqueWithoutRoomInput = {
    where: MuralWhereUniqueInput
    update: XOR<MuralUpdateWithoutRoomInput, MuralUncheckedUpdateWithoutRoomInput>
    create: XOR<MuralCreateWithoutRoomInput, MuralUncheckedCreateWithoutRoomInput>
  }

  export type MuralUpdateWithWhereUniqueWithoutRoomInput = {
    where: MuralWhereUniqueInput
    data: XOR<MuralUpdateWithoutRoomInput, MuralUncheckedUpdateWithoutRoomInput>
  }

  export type MuralUpdateManyWithWhereWithoutRoomInput = {
    where: MuralScalarWhereInput
    data: XOR<MuralUpdateManyMutationInput, MuralUncheckedUpdateManyWithoutRoomInput>
  }

  export type MuralScalarWhereInput = {
    AND?: MuralScalarWhereInput | MuralScalarWhereInput[]
    OR?: MuralScalarWhereInput[]
    NOT?: MuralScalarWhereInput | MuralScalarWhereInput[]
    id?: StringFilter<"Mural"> | string
    title?: StringFilter<"Mural"> | string
    createdAt?: DateTimeFilter<"Mural"> | Date | string
    updatedAt?: DateTimeFilter<"Mural"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Mural"> | Date | string | null
    roomId?: StringFilter<"Mural"> | string
  }

  export type RoomCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutRoomsInput
    murals?: MuralCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaceId: string
    murals?: MuralUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutUsersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutRoomsInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    murals?: MuralUserCreateNestedManyWithoutUserInput
    groups?: GroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    murals?: MuralUserUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type RoomUpsertWithoutUsersInput = {
    update: XOR<RoomUpdateWithoutUsersInput, RoomUncheckedUpdateWithoutUsersInput>
    create: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutUsersInput, RoomUncheckedUpdateWithoutUsersInput>
  }

  export type RoomUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutRoomsNestedInput
    murals?: MuralUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    murals?: MuralUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    murals?: MuralUserUpdateManyWithoutUserNestedInput
    groups?: GroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    murals?: MuralUserUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutMuralsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutRoomsInput
    users?: RoomUserCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMuralsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaceId: string
    users?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMuralsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMuralsInput, RoomUncheckedCreateWithoutMuralsInput>
  }

  export type MuralUserCreateWithoutMuralInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
    user: UserCreateNestedOneWithoutMuralsInput
  }

  export type MuralUserUncheckedCreateWithoutMuralInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type MuralUserCreateOrConnectWithoutMuralInput = {
    where: MuralUserWhereUniqueInput
    create: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput>
  }

  export type MuralUserCreateManyMuralInputEnvelope = {
    data: MuralUserCreateManyMuralInput | MuralUserCreateManyMuralInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutMuralsInput = {
    update: XOR<RoomUpdateWithoutMuralsInput, RoomUncheckedUpdateWithoutMuralsInput>
    create: XOR<RoomCreateWithoutMuralsInput, RoomUncheckedCreateWithoutMuralsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMuralsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMuralsInput, RoomUncheckedUpdateWithoutMuralsInput>
  }

  export type RoomUpdateWithoutMuralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutRoomsNestedInput
    users?: RoomUserUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMuralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    users?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type MuralUserUpsertWithWhereUniqueWithoutMuralInput = {
    where: MuralUserWhereUniqueInput
    update: XOR<MuralUserUpdateWithoutMuralInput, MuralUserUncheckedUpdateWithoutMuralInput>
    create: XOR<MuralUserCreateWithoutMuralInput, MuralUserUncheckedCreateWithoutMuralInput>
  }

  export type MuralUserUpdateWithWhereUniqueWithoutMuralInput = {
    where: MuralUserWhereUniqueInput
    data: XOR<MuralUserUpdateWithoutMuralInput, MuralUserUncheckedUpdateWithoutMuralInput>
  }

  export type MuralUserUpdateManyWithWhereWithoutMuralInput = {
    where: MuralUserScalarWhereInput
    data: XOR<MuralUserUpdateManyMutationInput, MuralUserUncheckedUpdateManyWithoutMuralInput>
  }

  export type MuralCreateWithoutUsersInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutMuralsInput
  }

  export type MuralUncheckedCreateWithoutUsersInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roomId: string
  }

  export type MuralCreateOrConnectWithoutUsersInput = {
    where: MuralWhereUniqueInput
    create: XOR<MuralCreateWithoutUsersInput, MuralUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutMuralsInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    groups?: GroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMuralsInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMuralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMuralsInput, UserUncheckedCreateWithoutMuralsInput>
  }

  export type MuralUpsertWithoutUsersInput = {
    update: XOR<MuralUpdateWithoutUsersInput, MuralUncheckedUpdateWithoutUsersInput>
    create: XOR<MuralCreateWithoutUsersInput, MuralUncheckedCreateWithoutUsersInput>
    where?: MuralWhereInput
  }

  export type MuralUpdateToOneWithWhereWithoutUsersInput = {
    where?: MuralWhereInput
    data: XOR<MuralUpdateWithoutUsersInput, MuralUncheckedUpdateWithoutUsersInput>
  }

  export type MuralUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutMuralsNestedInput
  }

  export type MuralUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMuralsInput = {
    update: XOR<UserUpdateWithoutMuralsInput, UserUncheckedUpdateWithoutMuralsInput>
    create: XOR<UserCreateWithoutMuralsInput, UserUncheckedCreateWithoutMuralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMuralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMuralsInput, UserUncheckedUpdateWithoutMuralsInput>
  }

  export type UserUpdateWithoutMuralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    groups?: GroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMuralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateWithoutGroupsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    workspaces?: WorkspaceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutGroupsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutGroupsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutGroupsInput, CompanyUncheckedCreateWithoutGroupsInput>
  }

  export type GroupUserCreateWithoutGroupInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUserUncheckedCreateWithoutGroupInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupUserCreateOrConnectWithoutGroupInput = {
    where: GroupUserWhereUniqueInput
    create: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput>
  }

  export type GroupUserCreateManyGroupInputEnvelope = {
    data: GroupUserCreateManyGroupInput | GroupUserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupWorkspaceCreateWithoutGroupInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
    workspace: WorkspaceCreateNestedOneWithoutGroupsInput
  }

  export type GroupWorkspaceUncheckedCreateWithoutGroupInput = {
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceCreateOrConnectWithoutGroupInput = {
    where: GroupWorkspaceWhereUniqueInput
    create: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput>
  }

  export type GroupWorkspaceCreateManyGroupInputEnvelope = {
    data: GroupWorkspaceCreateManyGroupInput | GroupWorkspaceCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutGroupsInput = {
    update: XOR<CompanyUpdateWithoutGroupsInput, CompanyUncheckedUpdateWithoutGroupsInput>
    create: XOR<CompanyCreateWithoutGroupsInput, CompanyUncheckedCreateWithoutGroupsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutGroupsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutGroupsInput, CompanyUncheckedUpdateWithoutGroupsInput>
  }

  export type CompanyUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    workspaces?: WorkspaceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    workspaces?: WorkspaceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type GroupUserUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupUserWhereUniqueInput
    update: XOR<GroupUserUpdateWithoutGroupInput, GroupUserUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupUserCreateWithoutGroupInput, GroupUserUncheckedCreateWithoutGroupInput>
  }

  export type GroupUserUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupUserWhereUniqueInput
    data: XOR<GroupUserUpdateWithoutGroupInput, GroupUserUncheckedUpdateWithoutGroupInput>
  }

  export type GroupUserUpdateManyWithWhereWithoutGroupInput = {
    where: GroupUserScalarWhereInput
    data: XOR<GroupUserUpdateManyMutationInput, GroupUserUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupWorkspaceUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupWorkspaceWhereUniqueInput
    update: XOR<GroupWorkspaceUpdateWithoutGroupInput, GroupWorkspaceUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupWorkspaceCreateWithoutGroupInput, GroupWorkspaceUncheckedCreateWithoutGroupInput>
  }

  export type GroupWorkspaceUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupWorkspaceWhereUniqueInput
    data: XOR<GroupWorkspaceUpdateWithoutGroupInput, GroupWorkspaceUncheckedUpdateWithoutGroupInput>
  }

  export type GroupWorkspaceUpdateManyWithWhereWithoutGroupInput = {
    where: GroupWorkspaceScalarWhereInput
    data: XOR<GroupWorkspaceUpdateManyMutationInput, GroupWorkspaceUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUsersInput
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    murals?: MuralUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id: string
    username: string
    companyId?: string | null
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    murals?: MuralUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupCreateWithoutUsersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutGroupsInput
    workspaces?: GroupWorkspaceCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id: string
    companyId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    workspaces?: GroupWorkspaceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUsersNestedInput
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    murals?: MuralUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    murals?: MuralUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutGroupsNestedInput
    workspaces?: GroupWorkspaceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: GroupWorkspaceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutWorkspacesInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company: CompanyCreateNestedOneWithoutGroupsInput
    users?: GroupUserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutWorkspacesInput = {
    id: string
    companyId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: GroupUserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutWorkspacesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutWorkspacesInput, GroupUncheckedCreateWithoutWorkspacesInput>
  }

  export type WorkspaceCreateWithoutGroupsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomCreateNestedManyWithoutWorkspaceInput
    company?: CompanyCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUncheckedCreateWithoutGroupsInput = {
    id: string
    name: string
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    rooms?: RoomUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutGroupsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutGroupsInput, WorkspaceUncheckedCreateWithoutGroupsInput>
  }

  export type GroupUpsertWithoutWorkspacesInput = {
    update: XOR<GroupUpdateWithoutWorkspacesInput, GroupUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<GroupCreateWithoutWorkspacesInput, GroupUncheckedCreateWithoutWorkspacesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutWorkspacesInput, GroupUncheckedUpdateWithoutWorkspacesInput>
  }

  export type GroupUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneRequiredWithoutGroupsNestedInput
    users?: GroupUserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: GroupUserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type WorkspaceUpsertWithoutGroupsInput = {
    update: XOR<WorkspaceUpdateWithoutGroupsInput, WorkspaceUncheckedUpdateWithoutGroupsInput>
    create: XOR<WorkspaceCreateWithoutGroupsInput, WorkspaceUncheckedCreateWithoutGroupsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutGroupsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutGroupsInput, WorkspaceUncheckedUpdateWithoutGroupsInput>
  }

  export type WorkspaceUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUpdateManyWithoutWorkspaceNestedInput
    company?: CompanyUpdateOneWithoutWorkspacesNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUserCreateManyUserInput = {
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type RoomUserCreateManyUserInput = {
    roomId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type MuralUserCreateManyUserInput = {
    muralId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type GroupUserCreateManyUserInput = {
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WorkspaceUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type RoomUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
    room?: RoomUpdateOneRequiredWithoutUsersNestedInput
  }

  export type RoomUserUncheckedUpdateWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type RoomUserUncheckedUpdateManyWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type MuralUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
    mural?: MuralUpdateOneRequiredWithoutUsersNestedInput
  }

  export type MuralUserUncheckedUpdateWithoutUserInput = {
    muralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type MuralUserUncheckedUpdateManyWithoutUserInput = {
    muralId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type GroupUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type GroupUserUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUserUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyCompanyInput = {
    id: string
    username: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WorkspaceCreateManyCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupCreateManyCompanyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    murals?: MuralUserUpdateManyWithoutUserNestedInput
    groups?: GroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    murals?: MuralUserUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUpdateManyWithoutWorkspaceNestedInput
    groups?: GroupWorkspaceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutWorkspaceNestedInput
    groups?: GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: GroupUserUpdateManyWithoutGroupNestedInput
    workspaces?: GroupWorkspaceUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: GroupUserUncheckedUpdateManyWithoutGroupNestedInput
    workspaces?: GroupWorkspaceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUserCreateManyWorkspaceInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.WorkspaceUserRole
  }

  export type RoomCreateManyWorkspaceInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupWorkspaceCreateManyWorkspaceInput = {
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type WorkspaceUserUpdateWithoutWorkspaceInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumWorkspaceUserRoleFieldUpdateOperationsInput | $Enums.WorkspaceUserRole
  }

  export type RoomUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: RoomUserUpdateManyWithoutRoomNestedInput
    murals?: MuralUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
    murals?: MuralUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupWorkspaceUpdateWithoutWorkspaceInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
    group?: GroupUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type GroupWorkspaceUncheckedUpdateWithoutWorkspaceInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceUncheckedUpdateManyWithoutWorkspaceInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type RoomUserCreateManyRoomInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.RoomUserRole
  }

  export type MuralCreateManyRoomInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomUserUpdateWithoutRoomInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUserUncheckedUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type RoomUserUncheckedUpdateManyWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoomUserRoleFieldUpdateOperationsInput | $Enums.RoomUserRole
  }

  export type MuralUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: MuralUserUpdateManyWithoutMuralNestedInput
  }

  export type MuralUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: MuralUserUncheckedUpdateManyWithoutMuralNestedInput
  }

  export type MuralUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MuralUserCreateManyMuralInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.MuralUserRole
  }

  export type MuralUserUpdateWithoutMuralInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
    user?: UserUpdateOneRequiredWithoutMuralsNestedInput
  }

  export type MuralUserUncheckedUpdateWithoutMuralInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type MuralUserUncheckedUpdateManyWithoutMuralInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumMuralUserRoleFieldUpdateOperationsInput | $Enums.MuralUserRole
  }

  export type GroupUserCreateManyGroupInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GroupWorkspaceCreateManyGroupInput = {
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: $Enums.GroupWorkspaceRole
  }

  export type GroupUserUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUserUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupUserUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupWorkspaceUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
    workspace?: WorkspaceUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupWorkspaceUncheckedUpdateWithoutGroupInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }

  export type GroupWorkspaceUncheckedUpdateManyWithoutGroupInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumGroupWorkspaceRoleFieldUpdateOperationsInput | $Enums.GroupWorkspaceRole
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}