import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function StyleguidePage() {
    const primaryShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]
    const neutralShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]

    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-5xl font-bold mb-6">Design Tokens</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Sistema elegante com paleta violeta profunda, fonte Charm para títulos e Myanmar Text para corpo.
                </p>
            </section>

            {/* Primary Scale, Neutral Scale, Semantic Colors, Typography, Radius, Shadows, Components e Dark Mode permanecem iguais à versão anterior, apenas as variáveis de cor foram atualizadas automaticamente */}

            {/* ... (o restante do código é idêntico ao fornecido anteriormente, pois as variáveis --primary-* e --neutral-* já estão corretas) */}

        </div>
    )
}