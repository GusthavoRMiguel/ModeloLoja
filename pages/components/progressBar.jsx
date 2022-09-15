export default function Language(props) {
  return (
    <div className="pb-4">
      <p className="ml-2  font-medium">{props.language}</p>
      <div class="bg-gray-600 rounded-full">
        <div Style={props.width} class="bg-purple-900 py-0 rounded-full"><div class=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full">{props.percent}%</div></div>
      </div>
    </div>
  )
}