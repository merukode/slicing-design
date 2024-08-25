interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isActive?: boolean; // Prop for last item is active
  isLast?: boolean; // To handle the last item
}

function TimelineItem({ time, title, description, isActive = false, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex items-start mb-8 last:mb-0 relative">
      {/* Dot and Vertical Line Container */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={`w-3 h-3 rounded-full ${
            isActive ? 'bg-[#00C9B1]' : 'bg-gray-400'
          }`}
        ></div>
        {/* Vertical Line */}
        {!isLast && (
          <div
            className={`absolute top-3 left-1/2 transform -translate-x-1/2 h-20 w-px ${
              isActive ? 'bg-[#00C9B1]' : 'bg-gray-400'
            }`}
          ></div>
        )}
      </div>

      {/* Content */}
      <div className="ml-6">
        <h3 className={`font-bold ${isActive ? 'text-black' : 'text-gray-400'}`}>{time}</h3>
        <p className={`font-medium ${isActive ? 'text-black' : 'text-gray-400'}`}>{title}</p>
        <p className={`${isActive ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative">
      <TimelineItem
        time="15 Seconds Ago"
        title="Sent to Thomas"
        description="Hi How are you today Thomas. Did you feel ......"
        isActive={true} // Top item is active
      />
      <TimelineItem
        time="40 Minutes Ago"
        title="Sent to Thomas"
        description="Hi How are you today Thomas. Did you feel ......"
      />
      <TimelineItem
        time="Hour Ago"
        title="Sent to Thomas"
        description="Hi How are you today Thomas. Did you feel ......"
      />
      <TimelineItem
        time="2 Hours Ago"
        title="Sent to Thomas"
        description="Hi How are you today Thomas. Did you feel ......"
        isLast={true} // Set isLast to true for last item
      />
    </div>
  );
}

export default Timeline;
