
import { NextRequest, NextResponse, userAgent } from 'next/server'
export function middleware(request: NextRequest) {

  const { os } = userAgent(request)
  if(os.name==='Android'){
    return NextResponse.redirect('https://play.google.com/store/apps/details?id=br.com.sysmo.b2c.righi&hl=pt_BR&pli=1')
  }
  else{
    return NextResponse.redirect('https://apps.apple.com/br/app/meu-righi-supermercados/id1568559219')
  }
}