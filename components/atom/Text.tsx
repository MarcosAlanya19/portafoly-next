import { FC } from "react"

interface Props {
  text: string
  classname?: string
}

export const Text: FC<Props> = ({ text, classname }) => <p className={classname}>{ text }</p>
