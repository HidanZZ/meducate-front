// third-party
import { format } from 'date-fns'
import NextLink from 'next/link'
import { CardContent, Stack, Avatar, Typography, CardMedia, Chip, Grid, Tooltip, Box } from '@mui/material'

import Icon from 'src/@core/components/icon'
import BlankCard from 'src/views/shared/BlankCard'

const NoteCard = ({ post }: any) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any = post

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

  return (
    <Grid item xs={12} lg={4} md={4} sm={6} display='flex' alignItems='stretch'>
      <BlankCard className='hoverCard'>
        <>
          <Typography component={NextLink} href={`/apps/blog/detail/${linkTo}`}>
            <CardMedia component='img' height='240' image={coverImg} alt='green iguana' />
          </Typography>
          <CardContent>
            <Stack direction='row' sx={{ marginTop: '-45px' }}>
              <Tooltip title={author?.name} placement='top'>
                <Avatar aria-label='recipe' src={author?.avatar}></Avatar>
              </Tooltip>
              <Chip
                sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                label='2 min Read'
                size='small'
              ></Chip>
            </Stack>
            <Chip label={category} size='small' sx={{ marginTop: 2 }}></Chip>
            <Box my={3}>
              <Typography
                gutterBottom
                variant='h5'
                color='inherit'
                sx={{ textDecoration: 'none' }}
                component={NextLink}
                href={`/apps/blog/detail/${linkTo}`}
              >
                {title}
              </Typography>
            </Box>
            <Stack direction='row' gap={3} alignItems='center'>
              <Stack direction='row' gap={1} alignItems='center'>
                <Icon icon={'mdi:eye'} /> {view}
              </Stack>
              <Stack direction='row' gap={1} alignItems='center'>
                <Icon icon='mdi:message-reply-text' /> {comments?.length}
              </Stack>

              <Stack direction='row' ml='auto' alignItems='center'>
                <Icon icon='circle-outline' />
                <small>{format(new Date(createdAt), 'E, MMM d')}</small>
              </Stack>
            </Stack>
          </CardContent>
        </>
      </BlankCard>
    </Grid>
  )
}

export default NoteCard
