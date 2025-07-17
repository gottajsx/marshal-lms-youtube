"use client";

import {useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Menubar } from './Menubar';

export function RichTextEditor() {
    const editor = useEditor({ 
        extensions: [StarterKit],
        immediatelyRender: false, //SSC
    });

    return (
        <div>
            <Menubar editor={editor} />
        </div>
    )


}