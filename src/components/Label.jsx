import classes from "./Label.module.css"
export default function Label() {
  return (
    <div className={classes.label}>
        <h1>Stories</h1>
        <div>
            <span>From</span>
            <span>Riangle</span>
            <span>Team</span>
        </div>
    </div>
  )
}
