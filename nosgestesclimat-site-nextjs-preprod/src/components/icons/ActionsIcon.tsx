import { twMerge } from 'tailwind-merge'

export default function ActionsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={twMerge('inline-block fill-default', className)}
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke="none"
        d="M18.1601 0.0129246C18.4774 0.0644142 18.7506 0.265291 18.8944 0.552799L19.7453 2.25466L21.4472 3.10558C21.7347 3.24934 21.9356 3.52254 21.987 3.83983C22.0385 4.15712 21.9344 4.47982 21.7071 4.70712L18.7071 7.70712C18.5195 7.89466 18.2652 8.00001 18 8.00001H15.4142L11.7071 11.7071C11.3165 12.0976 10.6834 12.0976 10.2929 11.7071C9.90234 11.3165 9.90234 10.6834 10.2929 10.2928L14 6.5858V4.00001C14 3.7348 14.1053 3.48044 14.2929 3.29291L17.2929 0.292905C17.5201 0.0656104 17.8428 -0.0385649 18.1601 0.0129246ZM16 6.00001H17.5857L19.3118 4.27396L18.5527 3.89444C18.3592 3.79768 18.2023 3.64075 18.1055 3.44723L17.726 2.68818L16 4.41423V6.00001ZM11 2.00001C6.02944 2.00001 2 6.02945 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 10.4477 20.4477 10 21 10C21.5523 10 22 10.4477 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92488 4.92487 1.20706e-05 11 1.20706e-05C11.5523 1.20706e-05 12 0.447727 12 1.00001C12 1.5523 11.5523 2.00001 11 2.00001ZM11 7.00001C8.79086 7.00001 7 8.79087 7 11C7 13.2092 8.79086 15 11 15C13.2091 15 15 13.2092 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.6863 7.68629 5.00001 11 5.00001C11.5523 5.00001 12 5.44773 12 6.00001C12 6.5523 11.5523 7.00001 11 7.00001Z"
      />
    </svg>
  )
}
