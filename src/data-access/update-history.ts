import { runQuery } from '@/data-access/util/run-query'

export const updateHistory = async (uid: string, action: string, status: string, updateTime: number) => {
  return await runQuery(
    'insert into device_history (productUid, action, status, updateTime) values (?,?,?,?)',
    [uid, action, status, updateTime],
  )
}
