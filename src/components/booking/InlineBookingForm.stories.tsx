import type { Meta, StoryObj } from '@storybook/react'
import { InlineBookingForm } from './InlineBookingForm'

const meta: Meta<typeof InlineBookingForm> = {
  title: 'Booking/InlineBookingForm',
  component: InlineBookingForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['hero', 'card', 'minimal'],
    },
    serviceType: {
      control: { type: 'select' },
      options: ['freeQuote', 'serviceCall', 'inspection'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Hero: Story = {
  args: {
    variant: 'hero',
    serviceType: 'freeQuote',
    onStartBooking: (data) => console.log('Hero booking:', data),
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
    serviceType: 'serviceCall',
    onStartBooking: (data) => console.log('Card booking:', data),
  },
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    serviceType: 'inspection',
    onStartBooking: (data) => console.log('Minimal booking:', data),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Hero Variant</h3>
        <InlineBookingForm
          variant="hero"
          serviceType="freeQuote"
          onStartBooking={() => {}}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Variant</h3>
        <InlineBookingForm
          variant="card"
          serviceType="serviceCall"
          onStartBooking={() => {}}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Minimal Variant</h3>
        <InlineBookingForm
          variant="minimal"
          serviceType="inspection"
          onStartBooking={() => {}}
        />
      </div>
    </div>
  ),
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    variant: 'hero',
    serviceType: 'freeQuote',
    onStartBooking: (data) => console.log('Mobile booking:', data),
  },
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    variant: 'card',
    serviceType: 'serviceCall',
    onStartBooking: (data) => console.log('Tablet booking:', data),
  },
}
