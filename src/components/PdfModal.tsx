import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl?: string;
  content?: React.ReactNode;
}

export default function PdfModal({ isOpen, onClose, title, pdfUrl, content }: PdfModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <DialogTitle className="text-lg font-bold pr-8">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          {pdfUrl ? (
            <iframe src={pdfUrl} className="w-full h-full border-0" title={title} />
          ) : content ? (
            <div className="px-6 py-5 text-sm text-gray-700 leading-relaxed space-y-3">
              {content}
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
