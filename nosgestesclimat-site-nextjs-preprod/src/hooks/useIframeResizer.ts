import { getIsIframe } from '@/utils/getIsIframe'
import { useEffect } from 'react'

export function useIframeResizer() {
  const isIframe = getIsIframe()

  useEffect(() => {
    // The code below communicate with the iframe.js script on a host site
    // to automatically resize the iframe when its inner content height
    // change.

    if (!isIframe) {
      return
    }

    const minHeight = 800 // Also used in iframe.js

    const observer = new ResizeObserver(([entry]) => {
      const value = Math.max(minHeight, entry.contentRect.height)

      window.parent?.postMessage({ kind: 'resize-height', value }, '*')
    })

    observer.observe(window.document.body)

    return () => observer.disconnect()
  }, [isIframe])
}
