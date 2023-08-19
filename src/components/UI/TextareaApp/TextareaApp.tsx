import styles from './TextareaApp.module.scss'
import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import BoldOptions from '@tiptap/extension-bold';
import ItalicOptions from '@tiptap/extension-italic';
import HorizontalRuleOptions from '@tiptap/extension-horizontal-rule';
import StrikeOptions from '@tiptap/extension-strike';
import HeadingOptions from '@tiptap/extension-heading';
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import MenuBar from './MenuBar'
import "./TextereaApp.scss"

interface IProps {
   className?: string;
   name?: string;
   value?: string;
   placeholder?: string;
   onChange?: any;
}

const TextareaApp = ({placeholder, onChange, value=""}:IProps) => {
   const editor = useEditor({
      extensions: [
         BoldOptions, ItalicOptions,
         HorizontalRuleOptions,
         StrikeOptions, HeadingOptions,
         Document, Paragraph,
         Text, Image, Dropcursor,
         Placeholder.configure({
            placeholder: placeholder
         }),
         TextAlign.configure({
           types: ['heading', 'paragraph'],
         }),
      ],
      editable: true,
      content: value
   })

   useEffect(() => {
      if(editor){
         editor.on('update', () => {
            const htmlContent = editor.getHTML()
            onChange(htmlContent)
            console.log(htmlContent)
         });
      }
    }, [editor]);


   return (
      <div className= {styles.textarea}>
         <div className={styles.editor_container}>
            <EditorContent 
               className={[styles.editor].join(" ")} 
               editor={editor}
            />
         </div>
         <div className={[styles.btn_group, styles.show].join(" ")}>
            <div className={styles.btn_editor}>
               <MenuBar editor={editor} />
            </div>
         </div>
      </div>
   );
};
export default TextareaApp