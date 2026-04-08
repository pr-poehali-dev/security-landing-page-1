import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const SEND_CALLBACK_URL = 'https://functions.poehali.dev/eebceec1-ed39-43fa-81a7-ba9fa2830f27';

interface CallbackModalProps {
  open: boolean;
  onClose: () => void;
  selectedTariff?: string;
}

export default function CallbackModal({ open, onClose, selectedTariff }: CallbackModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedTariff && open) {
      setComment(`Выбранный тариф: ${selectedTariff}`);
    }
  }, [selectedTariff, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(SEND_CALLBACK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, comment }),
      });

      if (!res.ok) throw new Error('Ошибка отправки');

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });

      setName('');
      setPhone('');
      setComment('');
      onClose();
    } catch {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Позвоните нам по телефону.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Заказать звонок</DialogTitle>
          <DialogDescription>
            {selectedTariff
              ? `Вы выбрали: ${selectedTariff}. Оставьте контакты — свяжемся в течение 15 минут.`
              : 'Оставьте свои контактные данные, и наш специалист свяжется с вами в течение 15 минут'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {selectedTariff && (
            <div className="bg-secondary/10 border border-secondary/30 rounded-md px-4 py-2 text-sm font-semibold text-primary">
              {selectedTariff}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Комментарий</Label>
            <Textarea
              id="comment"
              placeholder="Опишите ваш объект или задачу"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
            {loading ? 'Отправка...' : 'Отправить заявку'}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
