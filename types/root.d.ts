export declare const appRouter: import("@trpc/server").CreateRouterInner<
  import("@trpc/server").RootConfig<{
    ctx: Record<string, never>;
    meta: import("trpc-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: {
      stringify: (object: any) => string;
      parse: <T = unknown>(string: string) => T;
      serialize: (
        object: any,
      ) => import("superjson/dist/types").SuperJSONResult;
      deserialize: <T_1 = unknown>(
        payload: import("superjson/dist/types").SuperJSONResult,
      ) => T_1;
      registerClass: (
        v: import("superjson/dist/types").Class,
        options?:
          | string
          | import("superjson/dist/class-registry").RegisterOptions
          | undefined,
      ) => void;
      registerSymbol: (v: symbol, identifier?: string | undefined) => void;
      registerCustom: <I, O extends import("superjson/dist/types").JSONValue>(
        transformer: Omit<
          import("superjson/dist/custom-transformer-registry").CustomTransfomer<
            I,
            O
          >,
          "name"
        >,
        name: string,
      ) => void;
      allowErrorProps: (...props: string[]) => void;
    };
  }>,
  {
    bounty: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: Record<string, never>;
        meta: import("trpc-openapi").OpenApiMeta;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: {
          stringify: (object: any) => string;
          parse: <T = unknown>(string: string) => T;
          serialize: (
            object: any,
          ) => import("superjson/dist/types").SuperJSONResult;
          deserialize: <T_1 = unknown>(
            payload: import("superjson/dist/types").SuperJSONResult,
          ) => T_1;
          registerClass: (
            v: import("superjson/dist/types").Class,
            options?:
              | string
              | import("superjson/dist/class-registry").RegisterOptions
              | undefined,
          ) => void;
          registerSymbol: (v: symbol, identifier?: string | undefined) => void;
          registerCustom: <
            I,
            O extends import("superjson/dist/types").JSONValue,
          >(
            transformer: Omit<
              import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                I,
                O
              >,
              "name"
            >,
            name: string,
          ) => void;
          allowErrorProps: (...props: string[]) => void;
        };
      }>,
      {
        create: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: import("@trpc/server").Overwrite<
              Record<string, never>,
              Record<string, never>
            >;
            _input_in: {
              kind: "dev" | "content";
              github_user: {
                id: number;
                login: string;
              };
              task: {
                number: number;
                repo_owner: string;
                repo_name: string;
              };
              actor: {
                type: "user" | "org";
                id: string;
              };
              is_external: boolean;
              visibility: "public" | "unlisted";
              amount?: number | undefined;
              comment?:
                | {
                    id: number;
                  }
                | undefined;
            };
            _input_out: {
              kind: "dev" | "content";
              github_user: {
                id: number;
                login: string;
              };
              task: {
                number: number;
                repo_owner: string;
                repo_name: string;
              };
              actor: {
                type: "user" | "org";
                id: string;
              };
              is_external: boolean;
              visibility: "public" | "unlisted";
              amount?: number | undefined;
              comment?:
                | {
                    id: number;
                  }
                | undefined;
            };
            _output_in: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
            _output_out: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
          },
          unknown
        >;
        get: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
            _output_out: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
          },
          unknown
        >;
        getClaim: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: {
              status:
                | "pending"
                | "accepted"
                | "payment_processing"
                | "payment_succeeded";
              id: string;
              created_at: Date;
              updated_at: Date;
              solver: {
                id: number;
                login: string;
                avatar_url: string;
                html_url: string;
                name?: string | null | undefined;
                company?: string | null | undefined;
                location?: string | null | undefined;
                twitter_username?: string | null | undefined;
              };
              bounty: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
              };
              url?: string | undefined;
              pull_request_id?: number | undefined;
              transfer_amount?: number | undefined;
              transfer_currency?: "USD" | undefined;
              transfer?:
                | {
                    amount: number;
                    currency: "USD";
                  }
                | undefined;
            };
            _output_out: {
              status:
                | "pending"
                | "accepted"
                | "payment_processing"
                | "payment_succeeded";
              id: string;
              created_at: Date;
              updated_at: Date;
              solver: {
                id: number;
                login: string;
                avatar_url: string;
                html_url: string;
                name?: string | null | undefined;
                company?: string | null | undefined;
                location?: string | null | undefined;
                twitter_username?: string | null | undefined;
              };
              bounty: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
              };
              url?: string | undefined;
              pull_request_id?: number | undefined;
              transfer_amount?: number | undefined;
              transfer_currency?: "USD" | undefined;
              transfer?:
                | {
                    amount: number;
                    currency: "USD";
                  }
                | undefined;
            };
          },
          unknown
        >;
        list: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              org: string;
              limit?: unknown;
              cursor?: string | undefined;
              status?: "active" | "inactive" | undefined;
              rewarded?: boolean | undefined;
            };
            _input_out: {
              org: string;
              limit?: number | undefined;
              cursor?: string | undefined;
              status?: "active" | "inactive" | undefined;
              rewarded?: boolean | undefined;
            };
            _output_in: {
              items: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
              }[];
              next_cursor?: string | undefined;
            };
            _output_out: {
              items: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
              }[];
              next_cursor?: string | undefined;
            };
          },
          unknown
        >;
        listWithClaims: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              limit?: unknown;
              cursor?: string | undefined;
              org?: string | undefined;
              status?: "open" | "completed" | undefined;
              kind?: "dev" | "content" | undefined;
            };
            _input_out: {
              limit?: number | undefined;
              cursor?: string | undefined;
              org?: string | undefined;
              status?: "open" | "completed" | undefined;
              kind?: "dev" | "content" | undefined;
            };
            _output_in: {
              items: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
                claims: {
                  status:
                    | "pending"
                    | "accepted"
                    | "payment_processing"
                    | "payment_succeeded";
                  id: string;
                  created_at: Date;
                  updated_at: Date;
                  solver: {
                    id: number;
                    login: string;
                    avatar_url: string;
                    html_url: string;
                    name?: string | null | undefined;
                    company?: string | null | undefined;
                    location?: string | null | undefined;
                    twitter_username?: string | null | undefined;
                  };
                  url?: string | undefined;
                  pull_request_id?: number | undefined;
                  transfer_amount?: number | undefined;
                  transfer_currency?: "USD" | undefined;
                  transfer?:
                    | {
                        amount: number;
                        currency: "USD";
                      }
                    | undefined;
                }[];
              }[];
              next_cursor?: string | undefined;
            };
            _output_out: {
              items: {
                kind: "dev" | "content";
                status: "active" | "inactive";
                type: "standard" | "tip";
                id: string;
                task: {
                  number: number;
                  id: string;
                  repo_owner: string;
                  repo_name: string;
                  forge: "github";
                  title: string;
                  body: string;
                  source:
                    | {
                        type: "unknown";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "issue";
                      }
                    | {
                        data: {
                          id: number;
                          user: {
                            id: number;
                            login: string;
                            avatar_url: string;
                            html_url: string;
                            name?: string | null | undefined;
                            company?: string | null | undefined;
                            location?: string | null | undefined;
                            twitter_username?: string | null | undefined;
                          };
                          html_url: string;
                          title: string;
                          body?: string | null | undefined;
                        };
                        type: "pull_request";
                      };
                  url: string;
                  type?: "issue" | "pull_request" | undefined;
                };
                org: {
                  name: string | null;
                  id: string;
                  created_at: Date;
                  handle: string;
                  description: string | null;
                  avatar_url: string | null;
                  stargazers_count: number | null;
                  tech: string[];
                  accepts_sponsorships: boolean;
                  members: {
                    id: string;
                    user: {
                      name: string | null;
                      id: string;
                      handle: string;
                      image: string | null;
                      github_handle: string | null;
                      youtube_handle: string | null;
                      twitch_handle: string | null;
                      orgs: {
                        name: string | null;
                        id: string;
                        handle: string;
                        avatar_url: string | null;
                      }[];
                    };
                    created_at: Date;
                    is_admin: boolean;
                    weight: number;
                  }[];
                };
                reward: {
                  amount: number;
                  currency: "USD";
                } | null;
                reward_formatted: string | null;
                reward_tiers: {
                  amount: number;
                  currency: "USD";
                  lower_bound: number;
                  upper_bound: number | null;
                  metric: "youtube_subs" | "youtube_views_last30";
                }[];
                created_at: Date;
                bids: {
                  status: "pending" | "accepted";
                  id: string;
                  amount: number;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  currency: "USD";
                  created_at: Date;
                }[];
                updated_at: Date;
                claims: {
                  status:
                    | "pending"
                    | "accepted"
                    | "payment_processing"
                    | "payment_succeeded";
                  id: string;
                  created_at: Date;
                  updated_at: Date;
                  solver: {
                    id: number;
                    login: string;
                    avatar_url: string;
                    html_url: string;
                    name?: string | null | undefined;
                    company?: string | null | undefined;
                    location?: string | null | undefined;
                    twitter_username?: string | null | undefined;
                  };
                  url?: string | undefined;
                  pull_request_id?: number | undefined;
                  transfer_amount?: number | undefined;
                  transfer_currency?: "USD" | undefined;
                  transfer?:
                    | {
                        amount: number;
                        currency: "USD";
                      }
                    | undefined;
                }[];
              }[];
              next_cursor?: string | undefined;
            };
          },
          unknown
        >;
        update: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: import("@trpc/server").Overwrite<
              import("@trpc/server").Overwrite<
                Record<string, never>,
                Record<string, never>
              >,
              Record<string, never>
            >;
            _input_in: {
              org_id: string;
              id: string;
              reward?:
                | {
                    amount: number;
                    currency: "USD";
                  }
                | undefined;
              status?: "active" | "inactive" | undefined;
            };
            _input_out: {
              org_id: string;
              id: string;
              reward?:
                | {
                    amount: number;
                    currency: "USD";
                  }
                | undefined;
              status?: "active" | "inactive" | undefined;
            };
            _output_in: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
            _output_out: {
              kind: "dev" | "content";
              status: "active" | "inactive";
              type: "standard" | "tip";
              id: string;
              task: {
                number: number;
                id: string;
                repo_owner: string;
                repo_name: string;
                forge: "github";
                title: string;
                body: string;
                source:
                  | {
                      type: "unknown";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "issue";
                    }
                  | {
                      data: {
                        id: number;
                        user: {
                          id: number;
                          login: string;
                          avatar_url: string;
                          html_url: string;
                          name?: string | null | undefined;
                          company?: string | null | undefined;
                          location?: string | null | undefined;
                          twitter_username?: string | null | undefined;
                        };
                        html_url: string;
                        title: string;
                        body?: string | null | undefined;
                      };
                      type: "pull_request";
                    };
                url: string;
                type?: "issue" | "pull_request" | undefined;
              };
              org: {
                name: string | null;
                id: string;
                created_at: Date;
                handle: string;
                description: string | null;
                avatar_url: string | null;
                stargazers_count: number | null;
                tech: string[];
                accepts_sponsorships: boolean;
                members: {
                  id: string;
                  user: {
                    name: string | null;
                    id: string;
                    handle: string;
                    image: string | null;
                    github_handle: string | null;
                    youtube_handle: string | null;
                    twitch_handle: string | null;
                    orgs: {
                      name: string | null;
                      id: string;
                      handle: string;
                      avatar_url: string | null;
                    }[];
                  };
                  created_at: Date;
                  is_admin: boolean;
                  weight: number;
                }[];
              };
              reward: {
                amount: number;
                currency: "USD";
              } | null;
              reward_formatted: string | null;
              reward_tiers: {
                amount: number;
                currency: "USD";
                lower_bound: number;
                upper_bound: number | null;
                metric: "youtube_subs" | "youtube_views_last30";
              }[];
              created_at: Date;
              bids: {
                status: "pending" | "accepted";
                id: string;
                amount: number;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                currency: "USD";
                created_at: Date;
              }[];
              updated_at: Date;
            };
          },
          unknown
        >;
      }
    >;
    org: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: Record<string, never>;
        meta: import("trpc-openapi").OpenApiMeta;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: {
          stringify: (object: any) => string;
          parse: <T = unknown>(string: string) => T;
          serialize: (
            object: any,
          ) => import("superjson/dist/types").SuperJSONResult;
          deserialize: <T_1 = unknown>(
            payload: import("superjson/dist/types").SuperJSONResult,
          ) => T_1;
          registerClass: (
            v: import("superjson/dist/types").Class,
            options?:
              | string
              | import("superjson/dist/class-registry").RegisterOptions
              | undefined,
          ) => void;
          registerSymbol: (v: symbol, identifier?: string | undefined) => void;
          registerCustom: <
            I,
            O extends import("superjson/dist/types").JSONValue,
          >(
            transformer: Omit<
              import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                I,
                O
              >,
              "name"
            >,
            name: string,
          ) => void;
          allowErrorProps: (...props: string[]) => void;
        };
      }>,
      {
        addMember: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: import("@trpc/server").Overwrite<
              import("@trpc/server").Overwrite<
                Record<string, never>,
                Record<string, never>
              >,
              Record<string, never>
            >;
            _input_in: {
              org_id: string;
              handle: string;
            };
            _input_out: {
              org_id: string;
              handle: string;
            };
            _output_in: {
              id: string;
              user: {
                name: string | null;
                id: string;
                handle: string;
                image: string | null;
                github_handle: string | null;
                youtube_handle: string | null;
                twitch_handle: string | null;
                orgs: {
                  name: string | null;
                  id: string;
                  handle: string;
                  avatar_url: string | null;
                }[];
              };
              created_at: Date;
              is_admin: boolean;
              weight: number;
            };
            _output_out: {
              id: string;
              user: {
                name: string | null;
                id: string;
                handle: string;
                image: string | null;
                github_handle: string | null;
                youtube_handle: string | null;
                twitch_handle: string | null;
                orgs: {
                  name: string | null;
                  id: string;
                  handle: string;
                  avatar_url: string | null;
                }[];
              };
              created_at: Date;
              is_admin: boolean;
              weight: number;
            };
          },
          unknown
        >;
        get: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              org: string;
            };
            _input_out: {
              org: string;
            };
            _output_in: {
              name: string | null;
              id: string;
              created_at: Date;
              handle: string;
              description: string | null;
              avatar_url: string | null;
              stargazers_count: number | null;
              tech: string[];
              accepts_sponsorships: boolean;
              members: {
                id: string;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                created_at: Date;
                is_admin: boolean;
                weight: number;
              }[];
            };
            _output_out: {
              name: string | null;
              id: string;
              created_at: Date;
              handle: string;
              description: string | null;
              avatar_url: string | null;
              stargazers_count: number | null;
              tech: string[];
              accepts_sponsorships: boolean;
              members: {
                id: string;
                user: {
                  name: string | null;
                  id: string;
                  handle: string;
                  image: string | null;
                  github_handle: string | null;
                  youtube_handle: string | null;
                  twitch_handle: string | null;
                  orgs: {
                    name: string | null;
                    id: string;
                    handle: string;
                    avatar_url: string | null;
                  }[];
                };
                created_at: Date;
                is_admin: boolean;
                weight: number;
              }[];
            };
          },
          unknown
        >;
        getEarningsByCountry: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              org?: string | undefined;
            };
            _input_out: {
              org?: string | undefined;
            };
            _output_in: {
              amount: number;
              country: string;
              lat: number;
              lng: number;
            }[];
            _output_out: {
              amount: number;
              country: string;
              lat: number;
              lng: number;
            }[];
          },
          unknown
        >;
        getLeaderboard: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              org?: string | undefined;
            };
            _input_out: {
              org?: string | undefined;
            };
            _output_in: {
              id: number;
              user: {
                id: number;
                login: string;
                avatar_url: string;
                html_url: string;
                name?: string | null | undefined;
                company?: string | null | undefined;
                location?: string | null | undefined;
                twitter_username?: string | null | undefined;
              };
              stats: {
                num_completed_bounties: number;
                total_earnings: number;
              };
            }[];
            _output_out: {
              id: number;
              user: {
                id: number;
                login: string;
                avatar_url: string;
                html_url: string;
                name?: string | null | undefined;
                company?: string | null | undefined;
                location?: string | null | undefined;
                twitter_username?: string | null | undefined;
              };
              stats: {
                num_completed_bounties: number;
                total_earnings: number;
              };
            }[];
          },
          unknown
        >;
        getMembers: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: import("@trpc/server").Overwrite<
              import("@trpc/server").Overwrite<
                Record<string, never>,
                Record<string, never>
              >,
              Record<string, never>
            >;
            _input_in: {
              org_id: string;
              id: string;
            };
            _input_out: {
              org_id: string;
              id: string;
            };
            _output_in: {
              id: string;
              user: {
                name: string | null;
                id: string;
                handle: string;
                image: string | null;
                github_handle: string | null;
                youtube_handle: string | null;
                twitch_handle: string | null;
                orgs: {
                  name: string | null;
                  id: string;
                  handle: string;
                  avatar_url: string | null;
                }[];
              };
              created_at: Date;
              is_admin: boolean;
              weight: number;
            }[];
            _output_out: {
              id: string;
              user: {
                name: string | null;
                id: string;
                handle: string;
                image: string | null;
                github_handle: string | null;
                youtube_handle: string | null;
                twitch_handle: string | null;
                orgs: {
                  name: string | null;
                  id: string;
                  handle: string;
                  avatar_url: string | null;
                }[];
              };
              created_at: Date;
              is_admin: boolean;
              weight: number;
            }[];
          },
          unknown
        >;
        getStats: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: Record<string, never>;
              meta: import("trpc-openapi").OpenApiMeta;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: {
                stringify: (object: any) => string;
                parse: <T = unknown>(string: string) => T;
                serialize: (
                  object: any,
                ) => import("superjson/dist/types").SuperJSONResult;
                deserialize: <T_1 = unknown>(
                  payload: import("superjson/dist/types").SuperJSONResult,
                ) => T_1;
                registerClass: (
                  v: import("superjson/dist/types").Class,
                  options?:
                    | string
                    | import("superjson/dist/class-registry").RegisterOptions
                    | undefined,
                ) => void;
                registerSymbol: (
                  v: symbol,
                  identifier?: string | undefined,
                ) => void;
                registerCustom: <
                  I,
                  O extends import("superjson/dist/types").JSONValue,
                >(
                  transformer: Omit<
                    import("superjson/dist/custom-transformer-registry").CustomTransfomer<
                      I,
                      O
                    >,
                    "name"
                  >,
                  name: string,
                ) => void;
                allowErrorProps: (...props: string[]) => void;
              };
            }>;
            _meta: import("trpc-openapi").OpenApiMeta;
            _ctx_out: Record<string, never>;
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: {
              open_bounties: {
                count: number;
                sum: number;
              };
              completed_bounties: {
                count: number;
                sum: number;
              };
              completed_tips: {
                count: number;
                sum: number;
              };
              solvers: {
                total: number;
                new: number;
              };
            };
            _output_out: {
              open_bounties: {
                count: number;
                sum: number;
              };
              completed_bounties: {
                count: number;
                sum: number;
              };
              completed_tips: {
                count: number;
                sum: number;
              };
              solvers: {
                total: number;
                new: number;
              };
            };
          },
          unknown
        >;
      }
    >;
  }
>;
export type AppRouter = typeof appRouter;
