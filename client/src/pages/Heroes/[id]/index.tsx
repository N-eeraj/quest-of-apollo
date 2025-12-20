import HeroQuests from "@/components/Heroes/Quests";
import {
  Link,
  Stack,
  LinearProgress,
  Typography,
  EditFab,
  Delete,
} from "@barrels/view";
import useHero from "@hooks/heroes/useHero";

function Hero() {
  const {
    loading,
    data,
    refetch,
    isDeleting,
    deleteHero,
  } = useHero();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <>
          <Stack
            rowGap={{
              xs: 1,
              sm: 1.5,
            }}
            paddingX={{
              xs: 2,
              sm: 3,
              md: 4,
            }}
            paddingY={1}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={600}>
              {data.hero.name}
            </Typography>

            <Typography
              component="span"
              display="flex"
              alignItems="center"
              flexWrap="wrap">
              From the city of&nbsp;
              <Typography
                component="strong"
                fontWeight={600}>
                {data.hero.city}
              </Typography>
            </Typography>

            {!!data.hero.relations.length && (
              <Stack rowGap={{
                sm: "2px",
              }}>
                <Typography
                  variant="h5"
                  component="h3">
                  Relations
                </Typography>
                <Stack
                  component="ul"
                  sx={{
                    listStyle: "none",
                  }}>
                  {data.hero.relations.map(({ id, god, relation }) => (
                    <Typography
                      key={id}
                      component="li">
                      {relation}:&nbsp;
                      <Typography
                        component={Link}
                        to={`/gods/${god.id}`}
                        sx={{
                          textDecoration: "none",
                          fontWeight: 600,
                          color: "inherit",
                          ":hover": {
                            textDecoration: "underline",
                          },
                        }}>
                        {god.name}
                      </Typography>
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            )}

            <HeroQuests
              quests={data.hero.quests}
              onDelete={refetch} />
          </Stack>

          <Delete
            loading={isDeleting}
            onClick={deleteHero} />
          <EditFab link={`/heroes/${data.hero.id}/edit`} />
        </>
      )}
    </>
  )
}

export default Hero;
