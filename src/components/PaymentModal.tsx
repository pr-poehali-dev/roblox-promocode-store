import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  promoCode: {
    title: string;
    price: string;
    description: string;
  };
}

const PaymentModal = ({ isOpen, onClose, promoCode }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsPurchased(true);
  };

  const handleClose = () => {
    setIsPurchased(false);
    setEmail('');
    setPaymentMethod('card');
    onClose();
  };

  if (isPurchased) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 animate-scale-in">
              <Icon name="Check" className="text-background" size={40} />
            </div>
            <DialogTitle className="text-3xl font-black text-center">Успешно!</DialogTitle>
            <DialogDescription className="text-center text-lg">
              Промокод отправлен на вашу почту
            </DialogDescription>
          </DialogHeader>
          <Card className="border-2 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">{promoCode.title}</CardTitle>
              <CardDescription>Ваш промокод готов к использованию</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-4 rounded-lg border-2 border-dashed border-primary font-mono text-2xl font-bold text-center tracking-wider">
                ROBUX-{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Также отправлено на: <span className="font-semibold">{email}</span>
              </p>
            </CardContent>
          </Card>
          <DialogFooter>
            <Button onClick={handleClose} className="w-full" size="lg">
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black">Оформление заказа</DialogTitle>
          <DialogDescription>
            Выберите способ оплаты и получите промокод мгновенно
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>{promoCode.title}</CardTitle>
                <CardDescription>{promoCode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {promoCode.price}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-semibold">Email для получения промокода</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base"
              />
              <p className="text-sm text-muted-foreground">
                <Icon name="Info" className="inline mr-1" size={14} />
                Промокод придёт на эту почту сразу после оплаты
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Способ оплаты</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <Card className={`cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-2 border-primary bg-primary/5' : 'border hover:border-primary/50'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Icon name="CreditCard" className="text-background" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Банковская карта</div>
                        <div className="text-sm text-muted-foreground">Visa, MasterCard, МИР</div>
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Card className={`cursor-pointer transition-all ${paymentMethod === 'sbp' ? 'border-2 border-primary bg-primary/5' : 'border hover:border-primary/50'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="sbp" id="sbp" />
                    <Label htmlFor="sbp" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                        <Icon name="Smartphone" className="text-background" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">СБП (Система быстрых платежей)</div>
                        <div className="text-sm text-muted-foreground">Быстрый перевод по QR-коду</div>
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Card className={`cursor-pointer transition-all ${paymentMethod === 'yoomoney' ? 'border-2 border-primary bg-primary/5' : 'border hover:border-primary/50'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="yoomoney" id="yoomoney" />
                    <Label htmlFor="yoomoney" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                        <Icon name="Wallet" className="text-background" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">ЮMoney</div>
                        <div className="text-sm text-muted-foreground">Электронный кошелёк</div>
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Card className={`cursor-pointer transition-all ${paymentMethod === 'qiwi' ? 'border-2 border-primary bg-primary/5' : 'border hover:border-primary/50'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="qiwi" id="qiwi" />
                    <Label htmlFor="qiwi" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Icon name="Wallet" className="text-background" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">QIWI Кошелёк</div>
                        <div className="text-sm text-muted-foreground">Оплата через QIWI</div>
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </RadioGroup>

            <div className="flex items-start gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <Icon name="Shield" className="text-primary mt-0.5" size={18} />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Безопасная оплата</p>
                <p className="text-muted-foreground">Все платежи защищены SSL-шифрованием</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleClose} disabled={isProcessing}>
            Отмена
          </Button>
          <Button 
            onClick={handlePayment} 
            disabled={!email || isProcessing}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            size="lg"
          >
            {isProcessing ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                Обработка...
              </>
            ) : (
              <>
                <Icon name="Lock" className="mr-2" size={20} />
                Оплатить {promoCode.price}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
