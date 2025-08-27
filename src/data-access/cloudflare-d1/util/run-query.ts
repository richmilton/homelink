import { getEnv } from '@/data-access/cloudflare-d1/util/get-env'

export const runQuery = async (sql: string, bindings: unknown[] = [] ) =>  {
  const env = await getEnv()
  if (env) {
    const preparedStatement = env.DB.prepare(sql).bind(...bindings)

    const d1Result = await preparedStatement.run()

    if (d1Result.error) {
      throw new Error(d1Result.error)
    }

    return d1Result
  }
}

