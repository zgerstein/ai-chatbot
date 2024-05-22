const placeholderParcel = [
    {
      trackingID: '2P1234534'
    }
  ]
  
  export const ParcelSkeleton = () => {
    return (
      <div className="-mt-2 flex w-full flex-col gap-2 py-4">
        {placeholderParcel.map(parcel => (
          <div
            key={parcel.trackingID}
            className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4"
          ></div> // Add a semicolon here
        ))}
      </div>
    )
  }
  