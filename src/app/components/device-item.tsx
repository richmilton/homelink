type DeviceItemProps = {
  label: string
  value: string
}

export const DeviceItem = ({ label, value }: DeviceItemProps) => <li>
  <span className="inline-block font-bold w-36 mt-1 sm:text-right mr-2">{label}:</span>
  <span className="inline-block w-48 sm:text-left">{value}</span>
</li>
