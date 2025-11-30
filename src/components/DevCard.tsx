interface DevCardProps {
  name: string
  pos: string
  content?: string
  avatar: string
  contact?: number
  github?: string
}

export const DevCard = ({
  name,
  pos,
  content,
  avatar,
}: DevCardProps) => {
  return (
    <figure className="w-full">
      <img
        className="w-24 h-24 border border-indigo-600 rounded-full mx-auto"
        src={avatar}
        alt={`${name} Pic`}
        width={384}
        height={512}
      />
      <div className="pt-6 text-center space-y-4">
        {content && (
          <blockquote>
            <p className="text-md md:text-lg font-medium">"{content}"</p>
          </blockquote>
        )}
        <figcaption className="font-medium">
          <div className="text-indigo-500">{name}</div>
          <div className="text-slate-500">{pos}</div>
        </figcaption>
      </div>
    </figure>
  )
}

