'use client'
import { useEffect } from "react"

export default function Custom404() {
  useEffect(() => {
    window.location.href = 'https://mytherapist.ng/for-therapists';
  }, []);

  return null;
}