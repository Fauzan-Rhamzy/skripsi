// import { useNavigate } from "react-router-dom";
import GoogleIcon from "@/assets/GoogleIcon";
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

import LogoInformatika from "../assets/logo_informatika.png";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const navigate = useNavigate();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-t-4 border-t-blue-900 shadow-md">
        <CardHeader className="text-center flex flex-col items-center">
          <div className="mb-4">
            {/* nanti ini diganti buat taro logo */}
            {/* <span className="text-gray-400 text-xs">Logo</span> */}
            <img
              src={LogoInformatika}
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
                // handle login
                // onClick={() => navigate("/dashboard")}
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
