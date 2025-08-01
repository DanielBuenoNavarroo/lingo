import { Button } from '@/components/ui/button'

const ButtonsPage = () => {
  return (
    <div className='p-4 flex flex-col gap-2 max-w-[200px]'>
        <Button>
            Default
        </Button>
        <Button variant={"primary"}>
            Primary
        </Button>
        <Button variant={"primaryOutline"}>
            Primary Outline
        </Button>
        <Button variant={"secondary"}>
            Secondary
        </Button>
        <Button variant={"secondaryOutline"}>
            Secondary Outline
        </Button>
        <Button variant={"destructive"}>
            Destructive
        </Button>
        <Button variant={"destructiveOutline"}>
            Destructive Outline
        </Button>
        <Button variant={"super"}>
            Super
        </Button>
        <Button variant={"superOutline"}>
            Super Outline
        </Button>
        <Button variant={"ghost"}>
            Ghost
        </Button>
        <Button variant={"sidebar"}>
            Sidebar
        </Button>
        <Button variant={"sidebarOutline"}>
            Sidebar Outline
        </Button>
    </div>
  )
}

export default ButtonsPage