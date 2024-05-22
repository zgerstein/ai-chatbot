import { format, parseISO } from 'date-fns'

interface TrackingInfo {
    trackingId: any;
    estimatedDeliveryDate: any;
    status: any;
    location: any;
    lastUpdated: any;
}

export function TrackingInfo({ props: trackingInfo }: { props: TrackingInfo }) {
  console.log("In TrackingInfo component with: ", trackingInfo);
//  this returns the tracking ID
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      <div className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4">
        <div className="text-lg text-white">Tracking ID: {trackingInfo.trackingId}</div>
        <div className="text-base text-pink-500">Arrives at: {trackingInfo.estimatedDeliveryDate}</div>
        <div className="text-base text-pink-500">Status: {trackingInfo.status}</div>
        <div className="text-base text-pink-500">Location: {trackingInfo.location}</div>
        <div className="text-base text-pink-500">Last Updated: {trackingInfo.lastUpdated}</div>
      </div>
    </div>
  )
}