import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export default function PdfModal({ isOpen, onClose, title, pdfUrl }: PdfModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <DialogTitle className="text-lg font-bold pr-8">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title={title}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-3">
              <Icon name="FileText" size={48} />
              <p className="text-sm">Документ будет добавлен позже</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
