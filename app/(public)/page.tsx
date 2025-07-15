"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface featureProps {
    title: string;
    description: string;
    icon: string;
}

const features: featureProps[] = [
    {
        title: "Comprehensive Courses",
        description: "Access a wide range of carefully curated courses designed by industry experts.",
        icon: "📚",
    },
    {
        title: "Interactive Learning",
        description: "Engage with interactive content, quizzes, and assignment to enhance your learning experience.",
        icon: "🎮",
    },
    {
        title: "Progress Tracking",
        description: "Monitor your progress and achievement with detailed analytics and persolaized dashboards.",
        icon: "👉",
    },
    {
        title: "Community Support",
        description: "Join a vibrant community of learners and instructors to collaborate and shaare knowledge.",
        icon: "👤",
    },
]

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
          toast.success("Sign-Out Successfully");
        },
      },
    });
  }

  return (
    <>
        <section className="relative py-20">
            <div className="flex flex-col items-center text-center space-y-8">
                <Badge variant={"outline"}>
                    The future of Online Education
                </Badge>
                <h1 className="text-4xl medium:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere.</p>
            
                <div className="flex flex-col sm:flex-row gap-4 my-8">
                    <Link 
                        className={buttonVariants({
                            size: "lg",
                        })} 
                        href="/courses">
                            Explore Courses
                    </Link>

                    <Link 
                        className={buttonVariants({
                            size: "lg",
                            variant: "outline",
                        })} 
                        href="/login">
                            Sign in
                    </Link>
                </div>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </section>
    </>
  );
}
