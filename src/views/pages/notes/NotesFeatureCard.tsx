import Link from 'next/link';
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  Chip,
  Grid,
  Tooltip,
  Box,
  alpha,
  styled,
} from '@mui/material';
import { format } from 'date-fns';
import Icon from 'src/@core/components/icon'

const CoverImgStyle = styled(CardContent)({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 1,
  width: '100%',
  height: '100%',
  color: 'white',
});
const CoverBox = styled(Box)({
  top: 0,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
});



const NotesFeatureCard = ({ post, index }: any) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any = post;
  const linkTo = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  const mainPost = index === 0;

  const CoverImgBg = styled(Box)({
    p: 0,
    height: '400px',
    position: 'relative',
    background: `url(${coverImg}) no-repeat center`,
    backgroundSize: 'cover',
  });

  return (
    <>
      {post ? (
        <Grid
          item
          xs={12}
          lg={mainPost ? 8 : 4}
          md={12}
          sm={12}
          display="flex"
          alignItems="stretch"
        >
          <CoverImgBg className="hoverCard">
            <>
              <Typography
                component={Link}
                href={`/apps/blog/detail/${linkTo}`}
              >
                <CoverBox
                  sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.6) }}
                />
              </Typography>
              <CoverImgStyle>
                <Box
                  height={'100%'}
                  display={'flex'}
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Box>
                    <Stack direction="row">
                      <Tooltip title={author?.name} placement="top">
                        <Avatar aria-label="recipe" src={author?.avatar}></Avatar>
                      </Tooltip>
                      <Chip
                        sx={{ marginLeft: 'auto' }}
                        label={category}
                        size="small"
                        color="primary"
                      ></Chip>
                    </Stack>
                  </Box>
                  <Box>
                    <Box my={3}>
                      <Typography
                        gutterBottom
                        variant="h3"
                        color="inherit"
                        sx={{ textDecoration: 'none' }}
                        component={Link}
                        href={`/apps/blog/detail/${linkTo}`}
                      >
                        {title}
                      </Typography>
                    </Box>
                    <Stack direction="row" gap={3} alignItems="center">
                      <Stack direction="row" gap={1} alignItems="center">
                        <Icon icon={"mdi:eye"}/> {view}
                      </Stack>
                      <Stack direction="row" gap={1} alignItems="center">
                        <Icon icon="mdi:message-reply-text" /> {comments?.length}
                      </Stack>

                      <Stack direction="row" ml="auto" alignItems="center">
                        <Icon icon="circle-outline" />
                        <small>{format(new Date(createdAt), 'E, MMM d')}</small>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </CoverImgStyle>
            </>
          </CoverImgBg>
        </Grid>
      ) : (
        ''
      )}
    </>
  );
};

export default NotesFeatureCard;
