import { format, parseISO } from 'date-fns'

interface Parcel {
  trackingId: string
  estimatedDeliveryDate: string
}

export function Parcel({ props: parcel }: { props: Parcel }) {
//  this returns the tracking ID
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      <div className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4">
        <div className="text-lg text-white">Tracking ID: {parcel.trackingId}</div>
        <div className="text-base text-pink-500">Arrives at: {parcel.estimatedDeliveryDate}</div>
      </div>
    </div>
  )
}