


export default function Page({ params }) {
  const imageWithTagSrc = `https://firebasestorage.googleapis.com/v0/b/frcapparence.appspot.com/o/${params.slug}-b.jpg?alt=media&token=b3e78d49-967d-471c-bc70-bad4c54d28a2`
  const imageWithoutTagSrc = `https://firebasestorage.googleapis.com/v0/b/frcapparence.appspot.com/o/${params.slug}-a.jpg?alt=media&token=b3e78d49-967d-471c-bc70-bad4c54d28a2`




  return (
    <main className='flex flex-col items-center'>
      {/*<img className='w-24 absolute right-4 top-4' src='/images/logo.png'></img>
      <div className='mt-24 mb-8 p-4 px-12 bg-orange font-bold'>
        TAP THUMBNAILS TO OPEN
      </div>*/}
      <section /*className='w-1/2 flex flex-col gap-8'*/>
        {/*<a href={imageWithTagSrc} target='_blank' rel='noopener noreferrer'>
          <img
            src={imageWithTagSrc}
            className='w-full max-h-52 object-cover object-bottom'
            alt='Image with tag'
          />
        </a>*/}
        <a href={imageWithoutTagSrc} target='_blank' rel='noopener noreferrer'>
          <img
            src={imageWithoutTagSrc}
            className='w-full max-h-full object-cover object-bottom'
            alt='Image without tag'
          />
        </a>
      </section>
    </main>
  )
}
