import PropTypes from 'prop-types'
import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate()

  const category = params.get('category')

  // console.log(category === label)

  const handleClick = () =>{
    // 1. Create Query String
    let currentQuery = {category: label}

    const url = queryString.stringifyUrl({
      url:'/',
      query: currentQuery,
    })
    // 2. Set query string in url
    // console.log(url)
    navigate(url)

  }

  return (
    <div>
      <div onClick={handleClick}
        className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${category === label && ' border-b-neutral-800 text-neutral-700'}`}
      >
        <Icon size={26} />
        <div className='text-sm font-medium'>{label}</div>
      </div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
