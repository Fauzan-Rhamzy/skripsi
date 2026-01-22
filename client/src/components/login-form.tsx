import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

const GoogleIcon = () => (
  <svg
    className="mr-2 h-4 w-4"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="google"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 488 512"
  >
    <path
      fill="#4285F4"
      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    ></path>
  </svg>
);

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-t-4 border-t-blue-900 shadow-md">
        <CardHeader className="text-center flex flex-col items-center">
          <div className="mb-4">
            {/* nanti ini diganti buat taro logo */}
            {/* <span className="text-gray-400 text-xs">Logo</span> */}
            <img
              src="https://informatika.unpar.ac.id/wp-content/uploads/2016/04/LogoInformatika2.jpg"
              alt="Logo Informatika UNPAR"
              className="h-16 w-auto object-contain mx-auto"
            />
          </div>

          <CardTitle className="text-xl font-bold text-slate-800">
            Informatika UNPAR
          </CardTitle>
          <CardDescription>Portal Tugas Akhir & Skripsi</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <Button
                variant="outline"
                type="button"
                className="w-full py-5 font-medium text-slate-700"
              >
                <GoogleIcon />
                Login with Google
              </Button>
            </Field>
          </FieldGroup>

          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              Gunakan email{" "}
              <span className="font-mono text-blue-700">
                @student.unpar.ac.id
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="text-center text-xs">
        &copy; 2026 Informatika Universitas Katolik Parahyangan
      </FieldDescription>{" "}
    </div>
  );
}
