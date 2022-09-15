export function Timeline(props) {
  return(
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-indigo-500 rounded-full h-3 w-3"></div>
        <div class="flex-1 ml-4 text-gray-400 text-sm font-medium"> {props.ano}</div>        
      </div>
      <div class="ml-12">
        <div class="flex-1 ml-4 text-lg font-semibold"> {props.title}</div>
        {props.description}
      </div>
    </li>
  )
}