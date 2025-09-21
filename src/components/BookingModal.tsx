import { Dialog, DialogContent } from './ui/dialog'
import { Button } from './ui/button'
import { X } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  calendarUrl: string
}

export default function BookingModal({ 
  isOpen, 
  onClose, 
  calendarUrl
}: BookingModalProps) {
  if (!calendarUrl) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] h-[80vh] max-w-none">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Calendar booking is not yet configured.
              </p>
              <p className="text-sm text-muted-foreground">
                Please contact us directly to schedule your appointment.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] h-[90vh] max-w-none p-0">
        {/* Close button positioned absolutely */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-background/80 hover:bg-background"
        >
          <X className="h-4 w-4" />
        </Button>
        
        {/* Full-screen iframe */}
        <iframe
          src={calendarUrl}
          className="w-full h-full border-0"
          title="Booking Calendar"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  )
}
