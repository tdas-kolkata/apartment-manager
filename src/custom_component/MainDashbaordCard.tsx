
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

type MainDashboardCardContent = {
    title:string;
    content:string;
    footer:string;
  }


function MainDashbaordCard(props:MainDashboardCardContent) {
  return (
    <Card className="h-min hover:bg-accent-foreground hover:text-accent cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="">{props.title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-0 pb-0 text-xs">
          <p>{props.content}</p>
        </CardContent>
        <CardFooter>
            <p className="text-2xl">{props.footer}</p>
        </CardFooter>
      </Card>
  )
}

export default MainDashbaordCard
