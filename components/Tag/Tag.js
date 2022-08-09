import styles from './Tag.module.css'

const Tag = ({variant, tag}) => {
    return (<span className={`tag-pill pill-${variant}`}>{tag}</span>)
}

export default Tag