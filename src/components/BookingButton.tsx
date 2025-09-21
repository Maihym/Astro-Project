import { Button } from './ui/button'
import BookingModal from './BookingModal'
import { useBooking } from '../hooks/use-booking'
import { cn } from '../lib/utils'

interface BookingButtonProps {
  type: 'freeQuote' | 'serviceCall' | 'inspection'
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export default function BookingButton({ 
  type, 
  children, 
  className,
  variant = 'default',
  size = 'default'
}: BookingButtonProps) {
  const { isOpen, openBooking, closeBooking, getCurrentBookingConfig } = useBooking()
  
  const handleClick = () => {
    openBooking(type)
  }
  
  return (
    <>
      <Button 
        onClick={handleClick}
        className={cn(className)}
        variant={variant}
        size={size}
      >
        {children}
      </Button>
      
      {/* Booking Modal */}
      {isOpen && getCurrentBookingConfig() && (
        <BookingModal
          isOpen={isOpen}
          onClose={closeBooking}
          calendarUrl={getCurrentBookingConfig()!.url}
        />
      )}
    </>
  )
}
