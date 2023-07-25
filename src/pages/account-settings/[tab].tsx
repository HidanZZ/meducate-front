// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'
import { useEffect } from 'react'

// ** Demo Components Imports
import AccountSettings from 'src/views/pages/account-settings/AccountSettings'

const AccountSettingsTab = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    console.log('tab', tab)
  }, [tab])
  
  return <AccountSettings tab={tab} />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { tab: 'account' } }, { params: { tab: 'notifications' } }],
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  console.log('params', params)

  return {
    props: {
      tab: params?.tab
    }
  }
}

export default AccountSettingsTab
