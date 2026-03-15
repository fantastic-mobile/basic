export function useAppPage() {
  const router = useRouter()

  function reload() {
    router.push({
      name: 'reload',
    })
  }

  return {
    reload,
  }
}
