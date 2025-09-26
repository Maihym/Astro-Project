import type { Meta, StoryObj } from '@storybook/react'
import { PersonalizedBookingModal } from './PersonalizedBookingModal'

const meta: Meta<typeof PersonalizedBookingModal> = {
  title: 'Booking/PersonalizedBookingModal',
  component: PersonalizedBookingModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    defaultServiceType: {
      control: { type: 'select' },
      options: ['freeQuote', 'serviceCall', 'inspection'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
    defaultServiceType: 'freeQuote',
  },
}

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: '',
      lastName: '',
      email: '',
    },
    defaultServiceType: 'freeQuote',
  },
}

export const WithInitialData: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
    },
    defaultServiceType: 'serviceCall',
  },
}

export const ServiceCall: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob@example.com',
    },
    defaultServiceType: 'serviceCall',
  },
}

export const Inspection: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'Alice',
      lastName: 'Brown',
      email: 'alice@example.com',
    },
    defaultServiceType: 'inspection',
  },
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
    defaultServiceType: 'freeQuote',
  },
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
    defaultServiceType: 'freeQuote',
  },
}
